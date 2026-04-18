'use client';

import Container from "./Container";

export default function Find() {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 transition-colors">

      <div className='relative  mx-auto py-16 md:py-24 lg:py-32 overflow-hidden '>
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/robot.png')`,
          }}
        >

        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to Find Your Perfect Match?
          </h2>

          {/* Subheading */}
          <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who found their perfect match.
          </p>

          {/* CTA Button */}
          <button
            className="inline-flex items-center gap-2 px-4 md:px-4 py-3 md:py-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <span className="text-base md:text-lg">Get Started Free</span>
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>
      </div>

    </section>
  );
}