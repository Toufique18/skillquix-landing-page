'use client';
import { useState } from 'react';
import { Eye, EyeOff, User, Upload, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { GoogleLogin } from '@react-oauth/google';
import { authApi } from '@/lib/api';
import { useRouter } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';


export default function Signup() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Store credentials to be used in the final registration step on the profile page
        localStorage.setItem('signup_email', email);
        localStorage.setItem('signup_password', password);
        router.push('/profile');
    };

    const handleGoogleSuccess = async (credentialResponse: any) => {
        try {
            console.log('Google Signup Success:', credentialResponse);
            const { credential } = credentialResponse;
            if (credential) {
                const decoded: any = jwtDecode(credential);
                console.log('User Name:', decoded.name);

                const response = await authApi.googleLogin(credential);
                console.log('Backend Response:', response.data);
                // Handle successful signup
                router.push('/profile');
            }
        } catch (error) {
            console.error('Google Signup Backend Error:', error);
        }
    };

    return (
        <div className={`flex min-h-screen bg-white`}>

            {/* Image Section - Transitions between left and right */}
            <div className="hidden lg:flex lg:w-1/2 h-screen overflow-hidden">
                <img
                    src="/login.png"
                    alt="Login illustration"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content Section */}
            <div className="flex w-full lg:w-1/2 flex-col justify-center items-center px-4 sm:px-8 lg:px-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
               

                    <div className="w-[85%] w-[80%] mx-auto bg-white dark:bg-gray-800 p-8 sm:p-12 rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] dark:shadow-[0_20px_50px_rgba(0,_0,_0,_0.3)] border border-gray-100 dark:border-gray-700">
                        {/* Logo */}
                        <div className="mb-10">
                            <Link href="/" className="inline-block">
                                <img src="/skill.png" alt="Skillquix" className="w-40 h-auto object-contain" />
                            </Link>
                            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 font-medium">Your Career Skill Intelligence Platform</p>
                        </div>

                        {/* Signup Header */}
                        <div className="mb-8 text-center">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Create your account</h2>
                            <p className="mt-2 text-gray-500 dark:text-gray-400">Start finding your perfect job match today.</p>
                        </div>

                        {/* Social Login Buttons */}
                        <div className="flex flex-col gap-3 sm:flex-row mb-8">
                            <div className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300 shadow-sm transition-all hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600">
                                <GoogleLogin
                                    onSuccess={handleGoogleSuccess}
                                    onError={() => console.log('Signup Failed')}
                                    useOneTap
                                    theme="outline"
                                    size="large"
                                    width="100%"
                                />
                            </div>
                            <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300 shadow-sm transition-all hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600">
                                <svg className='h-5 w-5' viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#0A66C2" d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z" /></svg>
                                LinkedIn
                            </button>
                            <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300 shadow-sm transition-all hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600">
                                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.85 21.18 10.37 21.95 9.17 22C7.93 22.05 6.94 20.68 6.11 19.44C4.44 16.81 3.2 12.03 4.95 8.76C5.83 7.14 7.48 6.09 9.26 6.06C10.57 6.03 11.84 6.96 12.62 6.96C13.4 6.96 14.95 5.86 16.5 6.01C17.26 6.04 19.05 6.29 20.15 7.89C20.07 7.95 18.02 9.08 18.07 11.56C18.12 14.58 20.68 15.57 20.73 15.59C20.7 15.64 20.08 17.61 18.71 19.5Z" />
                                    <path d="M15.78 4.04C16.48 3.2 16.96 2.06 16.84 0.92C15.86 0.97 14.7 1.58 13.99 2.43C13.36 3.18 12.79 4.36 12.92 5.46C14 5.54 15.09 4.89 15.78 4.04Z" />
                                </svg>
                                Apple
                            </button>
                        </div>

                        <div className="relative mb-8">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
                            </div>
                            <div className="relative flex justify-center text-xs uppercase tracking-wider">
                                <span className="bg-white dark:bg-gray-800 px-4 text-gray-500 dark:text-gray-400 font-medium">Or continue with email</span>
                            </div>
                        </div>
                        {/* Name Input */}
                        <div className="mb-5">
                            <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">Full Name</label>
                            <input
                                type="text"
                                placeholder="full name"
                                className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                            />
                        </div>
                        {/* Email Input */}
                        <div className="mb-5">
                            <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">Email Address</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="name@company.com"
                                className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="mb-5">
                            <div className="flex justify-between mb-2">
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Password</label>
                            </div>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-4 py-3 pr-12 text-gray-900 dark:text-white placeholder-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors focus:outline-none"
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? (
                                        <EyeOff size={20} />
                                    ) : (
                                        <Eye size={20} />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Remember me */}
                        <div className="mb-8 justify-between flex">
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <div className="relative flex items-center">
                                    <input type="checkbox" className="peer h-5 w-5 rounded-md border-gray-300 text-blue-600 focus:bg-[#0F2B5A] transition-all cursor-pointer" />
                                </div>
                                <span className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">I agree to the Terms of Service and Privacy Policy</span>
                            </label>
                        </div>

                        {/* Create Account Button */}
                        <button 
                            onClick={handleSubmit}
                            className="w-full rounded-xl bg-[#0F2B5A] py-4 font-bold text-white shadow-lg shadow-blue-500/30 hover:bg-[#183464] hover:shadow-blue-500/40 active:scale-[0.98] transition-all focus:outline-none focus:ring-4 focus:ring-blue-500/20 cursor-pointer text-lg mb-6"
                        >
                            Create Account
                        </button>

                        {/* Login Link */}
                        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
                            Already have an account?{' '}
                            <Link href="/login">
                                <button className="font-bold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer focus:outline-none">
                                    Login In
                                </button>
                            </Link>
                        </p>
                    </div>
                
            </div>
        </div>
    );
}

