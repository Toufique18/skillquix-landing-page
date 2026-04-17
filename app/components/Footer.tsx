// app/components/Footer.tsx
'use client';



export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <div className="flex flex-col items-center text-center">
          {/* Logo / Brand Name */}
          <div className="mb-4">
            
              <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Gig Match
              </span>
               {/* Copyright */}
          <div className="text-gray-500 text-sm">
            <p>© {currentYear} GigMatch. All rights reserved.</p>
          </div>
           
          </div>

          {/* Navigation Links */}
          <nav className="mb-6" aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3">
              
            </ul>
          </nav>

         
        </div>
      </div>
    </footer>
  );
}