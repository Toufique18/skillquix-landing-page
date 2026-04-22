'use client';
import { useState, useEffect, useRef } from 'react';
import { Mail, ArrowLeft, ShieldCheck, Lock, Eye, EyeOff, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
    useForgotPasswordMutation, 
    useVerifyOtpMutation, 
    useResendOtpMutation, 
    useResetPasswordMutation 
} from '@/lib/redux/services/authApi';

export default function Forgotpass() {
    const router = useRouter();
    
    // RTK Query Mutations
    const [forgotPassword] = useForgotPasswordMutation();
    const [verifyOtp] = useVerifyOtpMutation();
    const [resendOtp] = useResendOtpMutation();
    const [resetPassword] = useResetPasswordMutation();

    const [step, setStep] = useState<'email' | 'otp' | 'reset'>('email');
    const [timer, setTimer] = useState(30);
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [email, setEmail] = useState('');
    const [resetToken, setResetToken] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const otpInputs = useRef<(HTMLInputElement | null)[]>([]);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (step === 'otp' && timer > 0) {
            interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [step, timer]);

    const handleOtpChange = (index: number, value: string) => {
        if (value.length > 1) value = value[value.length - 1];
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move to next input if value is entered
        if (value && index < 5) {
            otpInputs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            otpInputs.current[index - 1]?.focus();
        }
    };

    const handleResend = async () => {
        if (timer === 0) {
            try {
                setIsSubmitting(true);
                const response: any = await resendOtp(email).unwrap();
                console.log('--- Resend OTP Success ---');
                console.log('Response:', response);
                setTimer(30);
                setOtp(['', '', '', '', '', '']); // Clear previous OTP
            } catch (error: any) {
                console.error('Resend OTP Error:', error);
                const errorMessage = error.data?.message || error.message || 'Resend failed';
                console.error('Error Message:', errorMessage);
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    const handleSendOtp = async () => {
        if (!email) return;
        try {
            setIsSubmitting(true);
            const response: any = await forgotPassword(email).unwrap();
            console.log('--- Forgot Password Success ---');
            console.log('Response:', response);
            setStep('otp');
            setTimer(30);
        } catch (error: any) {
            console.error('Forgot Password Error:', error);
            const errorMessage = error.data?.message || error.message || 'Request failed';
            console.error('Error Message:', errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleVerifyOtp = async () => {
        const otpValue = otp.join('');
        if (otpValue.length < 6) return;
        
        try {
            setIsSubmitting(true);
            const response: any = await verifyOtp({ email, otp: parseInt(otpValue) }).unwrap();
            console.log('--- OTP Verification Success ---');
            console.log('Response:', response);
            
            // Extract token from response
            const token = response.token || 
                          response.data?.token || 
                          response.accessToken || 
                          response.data?.accessToken;
            
            console.log('Extracted Token:', token);
            if (token) setResetToken(token);
            
            setStep('reset');
        } catch (error: any) {
            console.error('OTP Verification Error:', error);
            const errorMessage = error.data?.message || error.message || 'Verification failed';
            console.error('Error Message:', errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleResetPassword = async () => {
        if (!newPassword || !confirmPassword) return;
        if (newPassword !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        if (!resetToken) {
            console.error('No reset token found. Verification might have failed to provide one.');
            alert('Session error: Please verify your OTP again.');
            setStep('otp');
            return;
        }

        console.log('Attempting reset with token:', resetToken.substring(0, 10) + '...');

        try {
            setIsSubmitting(true);
            const response: any = await resetPassword({ 
                data: { newPassword, confirmPassword }, 
                token: resetToken 
            }).unwrap();
            
            console.log('--- Reset Password Success ---');
            console.log('Response:', response);
            alert('Password reset successful! Please log in with your new password.');
            router.push('/login');
        } catch (error: any) {
            console.error('Reset Password Error:', error);
            const errorMessage = error.data?.message || error.message || 'Reset failed';
            alert(errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex min-h-screen bg-white lg:flex">
            
            {/* Image Section - Right side */}
            <div className="hidden lg:flex lg:w-1/2 h-screen overflow-hidden">
                <img
                    src="/login.png"
                    alt="Forgot password illustration"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content Section - Left side */}
            <div className="flex w-full lg:w-1/2 flex-col justify-center items-center px-4 sm:px-8 lg:px-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-500 overflow-y-auto">
                <div className=" w-[80%] mx-auto bg-white dark:bg-gray-800 p-8 sm:p-12 rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] dark:shadow-[0_20px_50px_rgba(0,_0,_0,_0.3)] border border-gray-100 dark:border-gray-700">
                    
                    {/* Logo */}
                    <div className="mb-10 ">
                        <Link href="/" className="inline-block">
                            <img src="/skill.png" alt="Skillquix" className="w-40 h-auto object-contain" />
                        </Link>
                        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 font-medium">Your Career Skill Intelligence Platform</p>
                    </div>

                    {step === 'email' ? (
                        <>
                            {/* Header */}
                            <div className="mb-8 text-center">
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Forgot Password?</h2>
                                <p className="mt-2 text-gray-500 dark:text-gray-400">Enter your work email and we’ll help you reset it.</p>
                            </div>

                            {/* Email Form */}
                            <div className="space-y-6">
                                <div>
                                    <label className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-300">Email Address</label>
                                    <div className="relative">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                            <Mail size={20} />
                                        </div>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your email"
                                            className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-12 py-3.5 text-gray-900 dark:text-white placeholder-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                                        />
                                    </div>
                                </div>

                                <button 
                                    onClick={handleSendOtp}
                                    disabled={isSubmitting || !email}
                                    className="w-full rounded-xl bg-[#0F2B5A] py-4 font-bold text-white shadow-lg shadow-blue-500/30 hover:bg-[#183464] hover:shadow-blue-500/40 active:scale-[0.98] transition-all focus:outline-none focus:ring-4 focus:ring-blue-500/20 cursor-pointer text-lg disabled:opacity-50 flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            Sending...
                                        </>
                                    ) : 'Send OTP'}
                                </button>

                                <div className="text-center">
                                    <Link href="/login" className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-blue-600 transition-colors">
                                        <ArrowLeft size={16} />
                                        Back to log in
                                    </Link>
                                </div>
                            </div>
                        </>
                    ) : step === 'otp' ? (
                        <>
                            {/* Header */}
                            <div className="mb-8 text-center">
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Email Verification</h2>
                                <p className="mt-2 text-gray-500 dark:text-gray-400">We've sent a 6-digit code to your email.</p>
                            </div>

                            {/* OTP Form */}
                            <div className="space-y-8">
                                <div className="flex justify-between gap-2 sm:gap-4">
                                    {[0, 1, 2, 3, 4, 5].map((index) => (
                                        <input
                                            key={index}
                                            type="text"
                                            ref={(el) => { otpInputs.current[index] = el; }}
                                            value={otp[index]}
                                            onChange={(e) => handleOtpChange(index, e.target.value)}
                                            onKeyDown={(e) => handleKeyDown(index, e)}
                                            className="w-full h-12 sm:h-16 text-center text-xl sm:text-2xl font-bold rounded-xl sm:rounded-2xl border-2 border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                                        />
                                    ))}
                                </div>

                                <div className="text-center">
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        {timer > 0 ? (
                                            <>Resend code in <span className="font-bold text-[#0F2B5A] dark:text-blue-400">{timer}s</span></>
                                        ) : (
                                            <button 
                                                onClick={handleResend}
                                                className="font-bold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
                                            >
                                                Resend a new code
                                            </button>
                                        )}
                                    </p>
                                </div>

                                <button 
                                    onClick={handleVerifyOtp}
                                    disabled={isSubmitting || otp.join('').length < 6}
                                    className="w-full rounded-xl bg-[#0F2B5A] py-4 font-bold text-white shadow-lg shadow-blue-500/30 hover:bg-[#183464] hover:shadow-blue-500/40 active:scale-[0.98] transition-all focus:outline-none focus:ring-4 focus:ring-blue-500/20 cursor-pointer text-lg disabled:opacity-50 flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            Verifying...
                                        </>
                                    ) : 'Verify email'}
                                </button>

                                <div className="text-center">
                                    <button 
                                        onClick={() => setStep('email')}
                                        className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-blue-600 transition-colors cursor-pointer"
                                    >
                                        <ArrowLeft size={16} />
                                        Back to change email
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            {/* Header */}
                            <div className="mb-8 text-center">
                                
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Set Password</h2>
                                <p className="mt-2 text-gray-500 dark:text-gray-400">Your new password must be different from previous ones.</p>
                            </div>

                            {/* Reset Password Form */}
                            <div className="space-y-6">
                                <div>
                                    <label className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-300">New Password</label>
                                    <div className="relative">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                            <Lock size={20} />
                                        </div>
                                        <input
                                            type={showNewPassword ? "text" : "password"}
                                            value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                            placeholder="••••••••"
                                            className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-12 py-3.5 text-gray-900 dark:text-white placeholder-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowNewPassword(!showNewPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                                        >
                                            {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-300">Confirm Password</label>
                                    <div className="relative">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                            <Lock size={20} />
                                        </div>
                                        <input
                                            type={showConfirmPassword ? "text" : "password"}
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            placeholder="••••••••"
                                            className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-12 py-3.5 text-gray-900 dark:text-white placeholder-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                                        >
                                            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                        </button>
                                    </div>
                                </div>

                                <button 
                                    onClick={handleResetPassword}
                                    disabled={isSubmitting || !newPassword || !confirmPassword}
                                    className="w-full rounded-xl bg-[#0F2B5A] py-4 font-bold text-white shadow-lg shadow-blue-500/30 hover:bg-[#183464] hover:shadow-blue-500/40 active:scale-[0.98] transition-all focus:outline-none focus:ring-4 focus:ring-blue-500/20 cursor-pointer text-lg disabled:opacity-50 flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            Saving...
                                        </>
                                    ) : 'Save changes'}
                                </button>

                                <div className="text-center">
                                    <Link href="/login" className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-blue-600 transition-colors">
                                        <ArrowLeft size={16} />
                                        Back to log in
                                    </Link>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
