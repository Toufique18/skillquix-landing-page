'use client';

import { useState, useCallback } from 'react';
import Container from "./Container";
import ThemeToggle from "./ThemeToggle";
import Link from 'next/link';


function easeInOutCubic(t: number): number {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function smoothScrollTo(targetId: string, duration = 900) {
    if (targetId === '#') {
        const start = window.scrollY;
        const startTime = performance.now();

        function step(currentTime: number) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            window.scrollTo(0, start * (1 - easeInOutCubic(progress)));
            if (progress < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
        return;
    }

    const id = targetId.replace('#', '');
    const element = document.getElementById(id);
    if (!element) return;

    const navbarHeight = 80;
    const targetPosition = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
    const start = window.scrollY;
    const distance = targetPosition - start;
    const startTime = performance.now();

    function step(currentTime: number) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        window.scrollTo(0, start + distance * easeInOutCubic(progress));
        if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
}

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        setMobileMenuOpen(false);
        smoothScrollTo(targetId);
    }, []);

    return (
        <header className="fixed left-0 right-0 top-4 z-50 w-full xl:px-0 lg:px-12 md:px-10 sm:px-8 px-4">
            <Container>
                <div className="flex items-center justify-between border rounded-xl border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-black/60 py-5 px-4">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <img
                            src="/skill.png"
                            alt="Skillquix logo"
                            className="h-7 sm:h-8 w-auto object-contain"
                        />
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-8 text-gray-600 dark:text-gray-300">
                        <a href="#" onClick={(e) => handleNavClick(e, '#')} className="hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer">Home</a>
                        <a href="#price" onClick={(e) => handleNavClick(e, '#price')} className="hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer">Pricing</a>
                        <a href="#Testimonial" onClick={(e) => handleNavClick(e, '#Testimonial')} className="hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer">Testimonial</a>
                        <a href="#FAQ" onClick={(e) => handleNavClick(e, '#FAQ')} className="hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer">FAQ</a>
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden lg:flex gap-3 items-center">
                        <ThemeToggle />
                        <Link href="/login">
                            <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer">
                                Log In
                            </button>
                        </Link>

                        <button className="px-4 py-2 bg-[#0F2B5A] dark:bg-[#1a3d7a] text-white rounded-lg hover:bg-[#1a3d7a] dark:hover:bg-[#2a4d8a] transition-colors">
                            Sign up
                        </button>
                    </div>

                    {/* Mobile: Theme Toggle + Hamburger */}
                    <div className="flex lg:hidden items-center gap-2">
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
                    <div className="lg:hidden mt-2 border rounded-xl border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4 animate-in slide-in-from-top-2">
                        <nav className="flex flex-col gap-3 text-gray-600 dark:text-gray-300 mb-4">
                            <a href="#" onClick={(e) => handleNavClick(e, '#')} className="py-2 px-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer">Home</a>
                            <a href="#price" onClick={(e) => handleNavClick(e, '#price')} className="py-2 px-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer">Pricing</a>
                            <a href="#Testimonial" onClick={(e) => handleNavClick(e, '#Testimonial')} className="py-2 px-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer">Testimonial</a>
                            <a href="#FAQ" onClick={(e) => handleNavClick(e, '#FAQ')} className="py-2 px-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer">FAQ</a>
                        </nav>
                        <div className="flex gap-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                            <Link href="/login" className="flex-1">
                                <button className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-sm cursor-pointer">
                                    Log In
                                </button>
                            </Link>

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