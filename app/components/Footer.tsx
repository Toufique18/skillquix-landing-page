'use client';

import Container from "./Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 transition-colors">
      <Container>
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
          {/* Logo / Brand Name */}
          <div className="flex justify-between items-center flex-wrap gap-4">
            <p className="flex items-center gap-2 text-xl text-gray-700 dark:text-gray-300 transition-colors">
              <img className="text-black dark:bg-white dark:brightness-90" src="/Vector.png" alt="Gig Match Logo" />
              Gig Match
            </p>

            <nav className="hidden md:flex items-center gap-8 text-gray-600 dark:text-gray-400 transition-colors">
              <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Home</a>
              <a href="#price" className="hover:text-gray-900 dark:hover:text-white transition-colors">Pricing</a>
              <a href="#Testimonial" className="hover:text-gray-900 dark:hover:text-white transition-colors">Testimonial</a>
              <a href="#FAQ" className="hover:text-gray-900 dark:hover:text-white transition-colors">FAQ</a>
            </nav>
          </div>

          <div className="text-gray-500 dark:text-gray-400 text-sm mt-4 flex justify-between items-center flex-wrap gap-4 transition-colors">
            <p>© {currentYear} GigMatch. All rights reserved.</p>

            <div className="flex gap-2 dark:bg-white">
              <a href="#" className="hover:opacity-75 transition-opacity">
                <img src="/Frame8.png" alt="Social media" className="dark:brightness-90" />
              </a>
              <a href="#" className="hover:opacity-75 transition-opacity">
                <img src="/Frame7.png" alt="Social media" className="dark:brightness-90" />
              </a>
              <a href="#" className="hover:opacity-75 transition-opacity">
                <img src="/Frame6.png" alt="Social media" className="dark:brightness-90" />
              </a>
              <a href="#" className="hover:opacity-75 transition-opacity">
                <img src="/Frame5.png" alt="Social media" className="dark:brightness-90" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}