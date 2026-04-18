// app/components/Footer.tsx
'use client';


import Container from "./Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white ">
        <Container>
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
       {/* Logo / Brand Name */}
          <div className="flex justify-between">
              <p className="flex items-center gap-2 text-xl text-gray-700">
              <img className="text-black" src="/Vector.png" alt="" />
              Gig Match
              </p>

            <nav className="hidden md:flex items-center gap-8 text-gray-600">
              <a href="#">Home</a>
              <a href="#price">Pricing</a>
              <a href="#Testimonial">Testimonial</a>
              <a href="#FAQ">FAQ</a>
            </nav>
        </div>
           
          

               <div className="text-gray-500 text-sm mt-4 flex justify-between">
                        <p>© {currentYear} GigMatch. All rights reserved.</p>

                     <div className="flex gap-2 text-black ">
                        <img src="/Frame8.png" alt="" />
                        <img src="/Frame7.png" alt="" />
                        <img src="/Frame6.png" alt="" />
                        <img src="/Frame5.png" alt="" />
                     </div>
                 </div>  
                  
         
         </div>
        </Container>
      
    </footer>
  );
}