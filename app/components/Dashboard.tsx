'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { User, Mail, Lock, LogOut, LayoutDashboard } from 'lucide-react';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { logout } from '@/lib/redux/features/auth/authSlice';

export default function Dashboard() {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.auth.user);

    const handleLogout = () => {
        dispatch(logout());
        router.push('/login');
    };

    if (!user.isAuthenticated) {
        // You might want to redirect to login if not authenticated
        // router.push('/login');
        // return null;
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
            {/* Navbar */}
            <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3 sticky top-0 z-10 shadow-sm">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <img src="/skill.png" alt="Skillquix" className="h-8 w-auto" />
                        <span className="hidden sm:block font-bold text-xl text-[#0F2B5A] dark:text-white">Dashboard</span>
                    </div>
                    <button 
                        onClick={handleLogout}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 font-bold hover:bg-red-100 dark:hover:bg-red-900/30 transition-all cursor-pointer"
                    >
                        <LogOut size={18} />
                        Logout
                    </button>
                </div>
            </nav>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-4 py-12">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">User Overview</h1>
                    <p className="text-gray-500 dark:text-gray-400 mt-2">Welcome to your account control panel.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Name Card */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700">
                        <div className="h-12 w-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                            <User size={24} />
                        </div>
                        <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Full Name</h3>
                        <p className="text-xl font-bold text-gray-900 dark:text-white truncate">{user.name || 'N/A'}</p>
                    </div>

                    {/* Email Card */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700">
                        <div className="h-12 w-12 bg-purple-50 dark:bg-purple-900/20 rounded-xl flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                            <Mail size={24} />
                        </div>
                        <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Email Address</h3>
                        <p className="text-xl font-bold text-gray-900 dark:text-white truncate">{user.email || 'N/A'}</p>
                    </div>

                    {/* Password Card */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700">
                        <div className="h-12 w-12 bg-orange-50 dark:bg-orange-900/20 rounded-xl flex items-center justify-center text-orange-600 dark:text-orange-400 mb-4">
                            <Lock size={24} />
                        </div>
                        <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Password</h3>
                        <p className="text-xl font-bold text-gray-900 dark:text-white truncate">••••••••</p>
                    </div>
                </div>

                {/* AI Insights Placeholder */}
                <div className="mt-10 p-8 bg-[#0F2B5A] rounded-3xl shadow-xl shadow-blue-500/10 text-white overflow-hidden relative">
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-8 w-8 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-md">
                                <LayoutDashboard size={18} />
                            </div>
                            <span className="font-bold tracking-wider uppercase text-xs">Skill Intelligence</span>
                        </div>
                        <h2 className="text-2xl font-bold mb-2">Ready to grow your career?</h2>
                        <p className="text-blue-100/80 mb-6 max-w-md">Our AI is currently analyzing your resume to find the best job matches and skill gaps.</p>
                        <button className="px-6 py-3 bg-white text-[#0F2B5A] font-bold rounded-xl hover:bg-blue-50 transition-all active:scale-[0.98] cursor-pointer">
                            View Analysis
                        </button>
                    </div>
                    {/* Decorative element */}
                    <div className="absolute top-[-20%] right-[-10%] h-64 w-64 bg-blue-400/20 rounded-full blur-3xl"></div>
                </div>
            </main>
        </div>
    );
}
