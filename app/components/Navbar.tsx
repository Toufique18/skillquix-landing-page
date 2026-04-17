import Image from "next/image";
import Container from "./Container";

export default function Navbar() {
    return (
        <header className="w-full  py-4">
            <Container>
                <div className="flex items-center justify-between border rounded-xl border-gray-200 py-4 px-4">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                     <img
                        src="/skill.png"
                        alt="Skillquix logo"
                        className="h-8 w-auto object-contain"
                     />
                    </div>

                    {/* Nav */}
                    <nav className="hidden md:flex items-center gap-8 text-gray-600">
                        <a href="#">Home</a>
                        <a href="#">Pricing</a>
                        <a href="#">Testimonial</a>
                        <a href="#">FAQ</a>
                    </nav>

                    {/* Actions */}
                    <div className="flex gap-3">
                        <button className="px-4 py-2 border rounded-lg">
                            Log In
                        </button>
                        <button className="px-4 py-2 bg-[#0F2B5A] text-white rounded-lg">
                            Sign up
                        </button>
                    </div>
                </div>
            </Container>
        </header>
    );
}