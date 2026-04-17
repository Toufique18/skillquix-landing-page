// app/components/Footer.tsx
'use client';


import Container from "./Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
        <Container>
            <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <div className="flex items-center text-center justify-between">
          {/* Logo / Brand Name */}
          <div className="mb-4">
            
              <span className="text-xl md:text-3xl font-bold  text-black flex text-center">
                <img src="/Vector.png" alt="" />
                Gig Match
              </span>
               {/* Copyright */}
          <div className="text-gray-500 text-sm">
            <p>© {currentYear} GigMatch. All rights reserved.</p>
          </div>
           
          </div>

                <div className="text-end">
 <nav className="hidden md:flex items-center gap-8 text-gray-600">
                        <a href="#">Home</a>
                        <a href="#price">Pricing</a>
                        <a href="#Testimonial">Testimonial</a>
                        <a href="#FAQ">FAQ</a>
                    </nav>

                    <div className="flex gap-2 text-black">
                        <img src="/Frame8.png" alt="" />
                        <img src="/Frame7.png" alt="" />
                        <img src="/Frame6.png" alt="" />
                        <img src="/Frame5.png" alt="" />
                    </div>
                </div>
        
                   

         
        </div>
      </div>
        </Container>
      
    </footer>
  );
}