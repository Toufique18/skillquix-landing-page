'use client';

import { useState } from 'react';
import Container from "./Container";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="w-full py-4 sticky top-0 z-50 bg-white dark:bg-gray-900 transition-colors">
            <Container>
                <div className="flex items-center justify-between border rounded-xl border-gray-200 dark:border-gray-700 py-3 px-4">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                     <img
                        src="/skill.png"
                        alt="Skillquix logo"
                        className="h-7 sm:h-8 w-auto object-contain"
                     />
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8 text-gray-600 dark:text-gray-300">
                        <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Home</a>
                        <a href="#price" className="hover:text-gray-900 dark:hover:text-white transition-colors">Pricing</a>
                        <a href="#Testimonial" className="hover:text-gray-900 dark:hover:text-white transition-colors">Testimonial</a>
                        <a href="#FAQ" className="hover:text-gray-900 dark:hover:text-white transition-colors">FAQ</a>
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex gap-3 items-center">
                        <ThemeToggle />
                        <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                            Log In
                        </button>
                        <button className="px-4 py-2 bg-[#0F2B5A] dark:bg-[#1a3d7a] text-white rounded-lg hover:bg-[#1a3d7a] dark:hover:bg-[#2a4d8a] transition-colors">
                            Sign up
                        </button>
                    </div>

                    {/* Mobile: Theme Toggle + Hamburger */}
                    <div className="flex md:hidden items-center gap-2">
                        <ThemeToggle />
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {mobileMenuOpen && (
                    <div className="md:hidden mt-2 border rounded-xl border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4 animate-in slide-in-from-top-2">
                        <nav className="flex flex-col gap-3 text-gray-600 dark:text-gray-300 mb-4">
                            <a href="#" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors">Home</a>
                            <a href="#price" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors">Pricing</a>
                            <a href="#Testimonial" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors">Testimonial</a>
                            <a href="#FAQ" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors">FAQ</a>
                        </nav>
                        <div className="flex gap-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                            <button className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-sm">
                                Log In
                            </button>
                            <button className="flex-1 px-4 py-2 bg-[#0F2B5A] dark:bg-[#1a3d7a] text-white rounded-lg hover:bg-[#1a3d7a] dark:hover:bg-[#2a4d8a] transition-colors text-sm">
                                Sign up
                            </button>
                        </div>
                    </div>
                )}
            </Container>
        </header>
    );
}