'use client';
import { useState, useRef } from 'react';
import { User, MapPin, ArrowLeft, Camera, ChevronDown, History, FileText } from 'lucide-react';
import Link from 'next/link';

export default function Profile() {
    const [isReview, setIsReview] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    
    const [formData, setFormData] = useState({
        fullName: '',
        professional: '',
        location: '',
        experience: '',
        bio: '',
        profileImage: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleImageClick = () => {
        fileInputRef.current?.click();
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData(prev => ({ ...prev, profileImage: reader.result as string }));
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="flex min-h-screen bg-white lg:flex-row">
            
            {/* Image Section - Right side*/}
            <div className="hidden lg:flex lg:w-1/2 h-screen overflow-hidden">
                <img
                    src="/login.png"
                    alt="Profile setup illustration"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content Section - Left side */}
            <div className="flex w-full lg:w-1/2 flex-col justify-center items-center px-4 sm:px-8 lg:px-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-500 overflow-y-auto py-6">
                <div className=" w-[80%] mx-auto bg-white dark:bg-gray-800 p-8 sm:p-12 rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] dark:shadow-[0_20px_50px_rgba(0,_0,_0,_0.3)] border border-gray-100 dark:border-gray-700">
                    
                    {/* Logo */}
                    <div className="mb-3">
                        <Link href="/" className="inline-block">
                            <img src="/skill.png" alt="Skillquix" className="w-40 h-auto object-contain" />
                        </Link>
                        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 font-medium">Your Career Skill Intelligence Platform</p>
                    </div>

                    {!isReview ? (
                        <>
                            {/* Header */}
                            <div className="mb-1">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Tell us about yourself</h2>
                                <p className="mt-1 text-gray-500 dark:text-gray-400">This helps us find the best job matches for you.</p>
                            </div>

                            {/* Profile Photo Placeholder */}
                            <div className="flex flex-col items-center mb-5">
                                <input 
                                    type="file" 
                                    ref={fileInputRef} 
                                    onChange={handleImageChange} 
                                    accept="image/*" 
                                    className="hidden" 
                                />
                                <div 
                                    onClick={handleImageClick}
                                    className="relative group cursor-pointer"
                                >
                                    <div className="h-20 w-20 rounded-full border-2 border-dashed border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 flex items-center justify-center transition-all group-hover:border-blue-500 group-hover:bg-blue-50/50 overflow-hidden">
                                        {formData.profileImage ? (
                                            <img src={formData.profileImage} alt="Profile" className="h-full w-full object-cover" />
                                        ) : (
                                            <User size={48} className="text-gray-300 dark:text-gray-600 group-hover:text-blue-400" />
                                        )}
                                    </div>
                                    <div className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm flex items-center justify-center text-gray-500 dark:text-gray-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                                        <Camera size={16} />
                                    </div>
                                </div>
                                <button 
                                    onClick={handleImageClick}
                                    className="mt-2 text-sm font-semibold text-gray-900 dark:text-white hover:text-blue-600 transition-colors cursor-pointer"
                                >
                                    {formData.profileImage ? 'Change photo' : '+ Add photo'}
                                </button>
                            </div>

                            {/* Form Fields */}
                            <div className="space-y-4">
                                {/* Full Name */}
                                <div>
                                    <label className="mb-1 block text-sm font-bold text-gray-700 dark:text-gray-300">Full Name</label>
                                    <div className="relative">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                            <User size={20} />
                                        </div>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            placeholder="your full name"
                                            className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-12 py-2 text-gray-900 dark:text-white placeholder-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Professional */}
                                <div>
                                    <label className="mb-1 block text-sm font-bold text-gray-700 dark:text-gray-300">Professional</label>
                                    <div className="relative">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                            <User size={20} />
                                        </div>
                                        <input
                                            type="text"
                                            name="professional"
                                            value={formData.professional}
                                            onChange={handleChange}
                                            placeholder="e.g., senior software Engineer"
                                            className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-12 py-2 text-gray-900 dark:text-white placeholder-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Location */}
                                <div>
                                    <label className="mb-1 block text-sm font-bold text-gray-700 dark:text-gray-300">Location</label>
                                    <div className="relative">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                            <MapPin size={20} />
                                        </div>
                                        <input
                                            type="text"
                                            name="location"
                                            value={formData.location}
                                            onChange={handleChange}
                                            placeholder="New York, USA"
                                            className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-12 py-2 text-gray-900 dark:text-white placeholder-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Years of Experience */}
                                <div>
                                    <label className="mb-1 block text-sm font-bold text-gray-700 dark:text-gray-300">Years of experience</label>
                                    <div className="relative">
                                        <select 
                                            name="experience"
                                            value={formData.experience}
                                            onChange={handleChange}
                                            className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-white appearance-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none cursor-pointer"
                                        >
                                            <option value="" disabled>Select experience level</option>
                                            <option value="0-2">Entry Level (0-2 years)</option>
                                            <option value="3-5">Mid Level (3-5 years)</option>
                                            <option value="5+">Senior Level (5+ years)</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                                            <ChevronDown size={20} />
                                        </div>
                                    </div>
                                </div>

                                {/* Brief Bio */}
                                <div>
                                    <label className="mb-1 block text-sm font-bold text-gray-700 dark:text-gray-300">Brief bio (Optional)</label>
                                    <textarea
                                        name="bio"
                                        value={formData.bio}
                                        onChange={handleChange}
                                        placeholder="Tell us a bit about your career goals..."
                                        rows={2}
                                        className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-white placeholder-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none resize-none"
                                    ></textarea>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-4 pt-2">
                                    <Link href="/signup" className="w-[40%]">
                                        <button className="w-full rounded-xl border border-gray-200 dark:border-gray-700 py-3 font-bold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all flex items-center justify-center gap-2 cursor-pointer">
                                            <ArrowLeft size={18} />
                                            Back
                                        </button>
                                    </Link>
                                    <button 
                                        onClick={() => setIsReview(true)}
                                        className="w-[60%] rounded-xl bg-[#0F2B5A] py-3 font-bold text-white shadow-lg shadow-blue-500/30 hover:bg-[#183464] hover:shadow-blue-500/40 active:scale-[0.98] transition-all focus:outline-none focus:ring-4 focus:ring-blue-500/20 cursor-pointer"
                                    >
                                        Save & Continue
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            {/* Review Header */}
                            <div className="mb-6">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Review Your Profile</h2>
                                <p className="mt-1 text-gray-500 dark:text-gray-400">Make sure everything looks good before we continue.</p>
                            </div>

                            {/* Review Card */}
                            <div className="w-full rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-8">
                                {/* Top Section */}
                                <div className="p-5 flex items-center gap-4 bg-white dark:bg-gray-800">
                                    <div className="h-12 w-12 rounded-full bg-gray-50 dark:bg-gray-900 flex items-center justify-center border border-gray-100 dark:border-gray-700 overflow-hidden">
                                        {formData.profileImage ? (
                                            <img src={formData.profileImage} alt="Profile" className="h-full w-full object-cover" />
                                        ) : (
                                            <User size={24} className="text-gray-400" />
                                        )}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 dark:text-white text-lg">{formData.fullName || 'Cameron Williamson'}</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{formData.professional || 'Senior Software Engineer'}</p>
                                    </div>
                                </div>

                                <div className="border-t border-gray-100 dark:border-gray-700"></div>

                                {/* Bottom Section */}
                                <div className="p-5 space-y-4 bg-white dark:bg-gray-800">
                                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                                        <MapPin size={18} className="text-gray-400" />
                                        <span className="text-sm font-medium">{formData.location || 'Set up your basic profile'}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                                        <History size={18} className="text-gray-400" />
                                        <span className="text-sm font-medium">{formData.experience ? formData.experience.charAt(0).toUpperCase() + formData.experience.slice(1) : '5-10'} <span className="font-bold">years experience</span></span>
                                    </div>
                                    <div className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                                        <FileText size={18} className="text-gray-400 mt-0.5 shrink-0" />
                                        <p className="text-sm font-medium leading-relaxed">
                                            {formData.bio || 'Passionate about building scalable web applications and mentoring junior developers.'}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-4">
                                <button 
                                    onClick={() => setIsReview(false)}
                                    className="w-[40%] rounded-xl border border-gray-200 dark:border-gray-700 py-3 font-bold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <ArrowLeft size={18} />
                                    Back
                                </button>
                                <button className="w-[60%] rounded-xl bg-[#0F2B5A] py-3 font-bold text-white shadow-lg shadow-blue-500/30 hover:bg-[#183464] hover:shadow-blue-500/40 active:scale-[0.98] transition-all focus:outline-none focus:ring-4 focus:ring-blue-500/20 cursor-pointer">
                                    Save & Continue
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
