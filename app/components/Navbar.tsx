import Container from "./Container";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    return (
        <header className="w-full py-4 sticky top-0 z-50 bg-white dark:bg-gray-900 transition-colors">
            <Container>
                <div className="flex items-center justify-between border rounded-xl border-gray-200 dark:border-gray-700 py-4 px-4">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                     <img
                        src="/skill.png"
                        alt="Skillquix logo"
                        className="h-8 w-auto object-contain"
                     />
                    </div>

                    {/* Nav */}
                    <nav className="hidden md:flex items-center gap-8 text-gray-600 dark:text-gray-300">
                        <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Home</a>
                        <a href="#price" className="hover:text-gray-900 dark:hover:text-white transition-colors">Pricing</a>
                        <a href="#Testimonial" className="hover:text-gray-900 dark:hover:text-white transition-colors">Testimonial</a>
                        <a href="#FAQ" className="hover:text-gray-900 dark:hover:text-white transition-colors">FAQ</a>
                    </nav>

                    {/* Actions */}
                    <div className="flex gap-3 items-center">
                        <ThemeToggle />
                        <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                            Log In
                        </button>
                        <button className="px-4 py-2 bg-[#0F2B5A] dark:bg-[#1a3d7a] text-white rounded-lg hover:bg-[#1a3d7a] dark:hover:bg-[#2a4d8a] transition-colors">
                            Sign up
                        </button>
                    </div>
                </div>
            </Container>
        </header>
    );
}