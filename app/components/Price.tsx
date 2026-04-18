import Container from "./Container";

export default function Price() {
  return (
    <section id="price" className="w-full bg-gray-100 dark:bg-gray-800 py-20 transition-colors">
      <Container>
        <div className="mx-auto px-4 md:px-20 text-center">
        
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white transition-colors">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 transition-colors">
            Choose the plan that's right for your job search journey.
          </p>

          {/* Cards */}
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-left">
            
            {/* Free Plan */}
            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6 flex flex-col justify-between hover:border-blue-600 dark:hover:border-blue-500 hover:shadow-xl transition-all duration-300">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Free</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Built for clarity, confidence, and long-term career growth at every stage.
                </p>

                <div className="mt-6 mb-4">
                  <span className="text-3xl text-black dark:text-white font-bold">$0</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">Per Month</span>
                </div>

                <button className="mt-4 w-full text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-md py-2 text-sm hover:bg-[#0F2B5A] dark:hover:bg-[#1a3d7a] hover:text-white dark:hover:text-white transition-all duration-300">
                  Current Plan
                </button>

                <div className="mt-6 text-sm text-gray-600 dark:text-gray-400 space-y-2">
                  <p>✓ Up to 3 reflections</p>
                  <p>✓ Turn work into skills</p>
                  <p>✓ AI-generated skills (basic)</p>
                  <p>✓ Private workspace</p>
                </div>
              </div>
            </div>

            {/* Starter Plan (Most Popular) */}
            <div className="relative bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-600 dark:border-blue-500 p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300">
              
              {/* Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0F2B5A] dark:bg-[#1a3d7a] text-white text-xs px-3 py-1 rounded-full flex gap-1 items-center whitespace-nowrap">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Most Popular
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Starter Pro
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Turn real work into skills, insight, and opportunity—consistently and effortlessly.
                </p>

                <div className="mt-6 mb-4">
                  <span className="text-3xl text-black dark:text-white font-bold">$19.99</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">Per Month</span>
                </div>

                <button className="mt-4 w-full text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-md py-2 text-sm hover:bg-[#0F2B5A] dark:hover:bg-[#1a3d7a] hover:text-white transition-all duration-300">
                  Upgrade plan
                </button>

                <div className="mt-6 text-sm text-gray-600 dark:text-gray-400 space-y-2">
                  <p>✓ Reflection Power</p>
                  <p>✓ Unlimited reflections</p>
                  <p>✓ AI skill extraction</p>
                  <p>✓ Resume builder</p>
                  <p>✓ Skills dashboard</p>
                  
                </div>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6 flex flex-col justify-between hover:border-blue-600 dark:hover:border-blue-500 hover:shadow-xl transition-all duration-300">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Premium Pro
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  From reflection to review, everything you need to grow your career.
                </p>

                <div className="mt-6 mb-4">
                  <span className="text-3xl text-black dark:text-white font-bold">$39.99</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">Per Month</span>
                </div>

                <button className="mt-4 w-full text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-md py-2 text-sm hover:bg-[#0F2B5A] dark:hover:bg-[#1a3d7a] hover:text-white transition-all duration-300">
                  Upgrade plan
                </button>

                <div className="mt-6 text-sm text-gray-600 dark:text-gray-400 space-y-2">
                  <p>✓ Advanced reflection</p>
                  <p>✓ Resume suite</p>
                  <p>✓ AI resume rewrite</p>
                  <p>✓ ATS-ready exports</p>
                  <p>✓ Priority support</p>
                   <p>✓ Advanced reflection</p>
                  <p>✓ Resume suite</p>
                  <p>✓ AI resume rewrite</p>
                  <p>✓ ATS-ready exports</p>
                  <p>✓ Priority support</p>
                   <p>✓ Advanced reflection</p>
                  <p>✓ Resume suite</p>
                  <p>✓ AI resume rewrite</p>
                  <p>✓ ATS-ready exports</p>
                  <p>✓ Priority support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}