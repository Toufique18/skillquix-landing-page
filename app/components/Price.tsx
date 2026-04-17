    import Container from "./Container";


export default function Price() {

  return (
    <section id="price" className="w-full bg-gray-100 py-20">
        <Container >
        <div className=" mx-auto px-20 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Simple, Transparent Pricing
        </h2>
        <p className="mt-3 text-gray-500">
          Choose the plan that's right for your job search journey.
        </p>

        {/* Cards */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 text-left">
          
          {/* Free Plan */}
          <div className="bg-white rounded-xl border p-6 flex flex-col justify-between hover:border-blue-600 hover:border-2 hover:bg-gradient-to-b from-[#F8FAFC] via-[#EEF2FF] to-[#E0E7FF] transition">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Free</h3>
              <p className="text-sm text-gray-500 mt-1">
                Built for clarity, confidence, and long-term career growth at every stage.
              </p>

              <div className="mt-6 text-3xl font-bold gap-1 flex">0$ <p className="text-sm text-gray-500 pt-3">Per Month</p></div>
              

              <button className="mt-4 w-full border rounded-md py-2 text-sm hover:bg-[#0F2B5A] hover:text-white">
                Current Plan
              </button>

              <div className="mt-6 text-sm text-gray-600 space-y-2">
                <p>✔ Up to 3 reflections</p>
                <p>✔ Turn work into skills</p>
                <p>✔ AI-generated skills (basic)</p>
                <p>✔ Private workspace</p>
              </div>
            </div>
          </div>

          {/* Starter Plan (Most Popular) */}
          <div className="relative bg-white rounded-xl border-2 p-6 flex flex-col justify-between hover:border-blue-600 hover:border-2 hover:bg-gradient-to-b from-[#F8FAFC] via-[#EEF2FF] to-[#E0E7FF] transition">
            
            {/* Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0F2B5A] text-white text-xs px-3 py-1 rounded-lg flex gap-1"><img src="/crown-03.png" alt="" />
            Most Popular
              
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Starter Pro
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Turn real work into skills, insight, and opportunity—consistently and effortlessly.
              </p>

              <div className="mt-6 text-3xl font-bold gap-1 flex">$19.99 <p className="text-sm text-gray-500 pt-3">Per Month</p>
              </div>
             

              <button className="mt-4 w-full border rounded-md py-2 text-sm hover:bg-[#0F2B5A] hover:text-white">
                Upgrade plan
              </button>

              <div className="mt-6 text-sm text-gray-600 space-y-2">
                <p>✔ Reflection Power</p>
                <p>✔ Unlimited reflections</p>
                <p>✔ AI skill extraction</p>
                <p>✔ Resume builder</p>
                <p>✔ Skills dashboard</p>
              </div>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="bg-white rounded-xl border p-6 flex flex-col justify-between hover:border-blue-600 hover:border-2 hover:bg-gradient-to-b from-[#F8FAFC] via-[#EEF2FF] to-[#E0E7FF] transition">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Premium Pro
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                From reflection to review, everything you need to grow your career.
              </p>

              <div className="mt-6 text-3xl font-bold gap-1 flex">$39.99 <p className="text-sm text-gray-500 pt-3">Per Month</p>
              
              </div>
              

              <button className="mt-4 w-full border rounded-md py-2 text-sm hover:bg-[#0F2B5A] hover:text-white">
                Upgrade plan
              </button>

              <div className="mt-6 text-sm text-gray-600 space-y-2">
                <p>✔ Advanced reflection</p>
                <p>✔ Resume suite</p>
                <p>✔ AI resume rewrite</p>
                <p>✔ ATS-ready exports</p>
                <p>✔ Priority support</p>
                <p>✔ Advanced reflection</p>
                <p>✔ Resume suite</p>
                <p>✔ AI resume rewrite</p>
                <p>✔ ATS-ready exports</p>
                <p>✔ Priority support</p>
                <p>✔ Advanced reflection</p>
                <p>✔ Resume suite</p>
                <p>✔ AI resume rewrite</p>
                <p>✔ ATS-ready exports</p>
                <p>✔ Priority support</p>
              </div>
            </div>
          </div>

        </div>
      </div>
            </Container>
      
    </section>
  );
}