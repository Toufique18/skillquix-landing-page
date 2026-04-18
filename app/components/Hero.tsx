import Container from "./Container";
import Image from "next/image";

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
    <section className="w-full bg-gray-50 py-15">
      <Container>
        <div className="grid md:grid-cols-2 gap-10 items-center ">
          
          {/* Left */}
          <div>
            <h1 className="text-5xl font-bold leading-tight text-gray-800">
              An intelligence layer that reveals the skills behind your experience—and the opportunities they unlock.
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              Skillquix is the only place where you learn how to speak your skills — clearly, confidently, and convincingly.
            </p>

            <button className="mt-8 px-6 py-3 bg-[#0F2B5A] text-white rounded-lg flex gap-1">
              Upload your resume
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
              </svg>

            </button>
          </div>

          {/* Right */}
          <div className="relative flex justify-center">
            <div  />

            <div className="">
              <img src="/hero.png" alt="" />
            </div>
          </div>
        </div>
        {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full mx-auto py-5">
        {card.map((cards) => (
          <div
            key={cards.name}
            className="group bg-white p-6 rounded-2xl border shadow-sm hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer"
          >
            {/* Logo */}
            <div className="flex mb-4">
              <img
                src={cards.logo}
                alt={cards.name}
                className="w-12 h-12 object-contain group-hover:scale-110 transition"
              />
            </div>

            {/* Name */}
            <p className="font-semibold text-gray-700 text-xl">
              {cards.name}
            </p>
            {/* Name */}
            <p className=" text-gray-400 text-sm pt-2">
              {cards.des}
            </p>
          </div>
        ))}
      </div>
      </Container>
    </section>
  );
}