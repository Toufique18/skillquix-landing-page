import Container from "./Container";

export default function Hero() {
    const card = [
    {
      name: "Smart Resume Parsing",
      logo: "logo/Frame1.png",
      des: "Upload your resume and our AI extracts your skills, experience, and qualifications instantly."
    },
    {
      name: "AI Skill Extraction",
      logo: "logo/Frame2.png",
      des: "Advanced machine learning identifies both hard and soft skills from your experience."
    },
    {
      name: "Skill Gap Analysis",
      logo: "logo/Frame3.png",
      des: "Discover missing skills for your dream roles and get guidance on how to acquire them."
    },
    {
      name: "Personalized Gig Matching",
      logo: "logo/Frame4.png",
      des: "Get job recommendations tailored to your unique skill set and career goals."
    },
  ];

  return (
    <section className="w-full bg-gray-50 dark:bg-gray-900 pt-24 pb-10 sm:pt-28 sm:pb-15 transition-colors">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          
          {/* Left */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-800 dark:text-white transition-colors">
              An intelligence layer that reveals the skills behind your experience and the opportunities they unlock.
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-300 transition-colors">
              Skillquix is the only place where you learn how to speak your skills — clearly, confidently, and convincingly.
            </p>

            <button className="mt-6 sm:mt-8 px-5 sm:px-6 py-3 bg-[#0F2B5A] dark:bg-[#1a3d7a] text-white rounded-lg flex gap-2 items-center hover:bg-[#1a3d7a] dark:hover:bg-[#2a4d8a] transition-all duration-300 text-sm sm:text-base">
              Upload your resume
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
              </svg>
            </button>
          </div>

          {/* Right */}
          <div className="relative flex justify-center">
            <div className="rounded-2xl overflow-hidden">
              <img 
                src="/hero.png" 
                alt="Hero illustration" 
                className="w-full h-auto dark:brightness-90 transition-all duration-300"
              />
            </div>
          </div>
        </div>
        
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full mx-auto py-5 mt-8 sm:mt-10">
          {card.map((cards) => (
            <div
              key={cards.name}
              className="group bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              {/* Logo */}
              <div className="flex mb-4">
                <img
                  src={cards.logo}
                  alt={cards.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:scale-110 transition duration-300 dark:brightness-90"
                />
              </div>

              {/* Name */}
              <p className="font-semibold text-gray-700 dark:text-gray-200 text-lg sm:text-xl transition-colors">
                {cards.name}
              </p>
              
              {/* Description */}
              <p className="text-gray-400 dark:text-gray-400 text-sm pt-2 transition-colors">
                {cards.des}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}