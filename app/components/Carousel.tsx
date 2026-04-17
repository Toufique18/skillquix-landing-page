'use client';

import Container from "./Container";
import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  img: string;  // Now using string URL instead of StaticImageData
  content: string;
  author: string;
  title: string;
  company?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    img: "/alex.png",  // Path relative to public folder
    content:
      "Skillquix helped me finally put words to the work I was doing every day. The reflection and skill breakdown made it much easier to explain my impact - both to myself and to others.",
    author: 'Alex Morgan',
    title: 'Senior Analyst',
    company: 'Healthcare Analytics Firm',
  },
  {
    id: 2,
    img: "/priya.png",
    content:
      "The structured reflections and skills dashboard gave me clarity on where I was strong and where I needed to grow. It felt like having a framework I could return to every week.",
    author: 'Priya Sharma',
    title: 'Clinical Research Associate',
    company: 'Global CRO',
  },
  {
    id: 3,
    img: "/lee.png",
    content:
      "What stood out about Skillquix was how intentional it felt. Instead of generic advice, it helped me connect real work to real skills in a way that made sense.",
    author: 'Daniel Lee',
    title: 'Project Coordinator',
    company: 'Life Sciences Organization',
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const goToPrevious = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection('left');
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  }, [isAnimating]);

  const goToNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection('right');
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }, [isAnimating]);

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [goToNext]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="Testimonial" className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 flex items-center justify-center p-4 md:p-8">
      <Container>
        <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Header Section */}
          <div className="text-start mb-8 lg:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Loved by Job Seekers
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Join thousands of professionals who found their perfect match.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative lg:col-span-2">
            {/* Main Card */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col  md:flex-row">
              {/* Image Section - 400px width */}
              <div className="   overflow-hidden ">
                {currentTestimonial.img && (
                  <img
                    src={currentTestimonial.img}
                    alt={currentTestimonial.author}
                    className="w-full h-full object-cover p-10"
                  />
                )}
              </div>

              {/* Content Section */}
              <div className="flex-1 p-8 md:p-10 lg:p-12">
                {/* Quote Icon */}
                <div className="mb-6">
                  <div className="flex items-center gap-1">
  <svg 
    className="w-5 h-5 text-yellow-400" 
    aria-hidden="true" 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    fill="currentColor" 
    viewBox="0 0 24 24"
  >
    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
  </svg>
  <svg 
    className="w-5 h-5 text-yellow-400" 
    aria-hidden="true" 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    fill="currentColor" 
    viewBox="0 0 24 24"
  >
    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
  </svg>
  <svg 
    className="w-5 h-5 text-yellow-400" 
    aria-hidden="true" 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    fill="currentColor" 
    viewBox="0 0 24 24"
  >
    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
  </svg>
  <svg 
    className="w-5 h-5 text-yellow-400" 
    aria-hidden="true" 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    fill="currentColor" 
    viewBox="0 0 24 24"
  >
    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
  </svg>
  <svg 
    className="w-5 h-5 text-gray-300" 
    aria-hidden="true" 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    fill="currentColor" 
    viewBox="0 0 24 24"
  >
    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
  </svg>
                  </div>
                </div>

                <div>
                    <p className="font-semibold text-gray-900 text-lg">
                      Company: {currentTestimonial.company}
                    </p>
                </div>

                {/* Testimonial Content with animation */}
                <div
                  className={`transition-all duration-500 ease-in-out transform ${
                    isAnimating
                      ? direction === 'right'
                        ? 'opacity-0 -translate-x-4'
                        : 'opacity-0 translate-x-4'
                      : 'opacity-100 translate-x-0'
                  }`}
                >
                  <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed mb-8">
                    &quot;{currentTestimonial.content}&quot;
                  </p>

                  {/* Author Info */}
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">
                      {currentTestimonial.author}
                    </p>
                    <p className="text-gray-500">
                      {currentTestimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              disabled={isAnimating}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-5 bg-white hover:bg-gray-100 rounded-full p-2 shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
            </button>

            <button
              onClick={goToNext}
              disabled={isAnimating}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-5 bg-white hover:bg-gray-100 rounded-full p-2 shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  disabled={isAnimating}
                  className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    index === currentIndex
                      ? 'w-8 h-2 bg-blue-600'
                      : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}