// app/components/FAQ.tsx
'use client';

import React, { useState } from 'react';
import Container from './Container';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 'contact',
    question: 'How can I contact Inkyy Team?',
    answer: 'You can reach us through our contact form on our website or by emailing us at xyz@gmail.com. We typically respond within 24 hours.',
  },
  {
    id: 'services',
    question: 'What services do you offer?',
    answer: 'We offer a wide range of services including custom web design, frontend and backend development, e-commerce solutions, API integrations, and responsive mobile-first design. Our team specializes in modern frameworks like React, Next.js, and Node.js.',
  },
  {
    id: 'maintenance',
    question: 'Do you provide website maintenance services?',
    answer: 'Yes, we provide ongoing website maintenance services to keep your site secure, up-to-date, and performing optimally. This includes regular backups, security updates, performance monitoring, content updates, and technical support.',
  },
  {
    id: 'timeline',
    question: 'How long does it take to design and develop a website?',
    answer: 'The timeline varies depending on the complexity of the project. A simple landing page can take 1-2 weeks, while a complex e-commerce or custom web application might take 4-8 weeks or more. We provide a detailed timeline after understanding your specific requirements.',
  },
  {
    id: 'deposit',
    question: 'Do you require a deposit for projects?',
    answer: 'Yes, we typically require a 50% deposit to begin work on any project. The remaining balance is due upon project completion and before final deployment. For larger projects, we can arrange a milestone-based payment schedule.',
  },
];

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <Container>

       <div id='FAQ' className="text-center mx-auto px-4 py-12 md:py-16 flex items-center">
      {/* Header Section */}
      <div className=" text-start mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 text-lg">
          Get answers to common questions here
        </p>
       
      </div>

      {/* FAQ Items */}
      <div className="space-y-4 w-2/3 ">
        {faqData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-gray-100 focus:ring-inset"
              aria-expanded={openItems.has(item.id)}
              aria-controls={`faq-answer-${item.id}`}
            >
              <span className="text-lg font-semibold text-gray-900">
                {item.question}
              </span>
              <span className="ml-4 flex-shrink-0 text-gray-600">
                {openItems.has(item.id) ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </span>
            </button>

            <div
              id={`faq-answer-${item.id}`}
              className={`transition-all duration-300 ease-in-out ${
                openItems.has(item.id)
                  ? 'max-h-96 opacity-100'
                  : 'max-h-0 opacity-0 overflow-hidden'
              }`}
              aria-hidden={!openItems.has(item.id)}
            >
              <div className="px-6 pb-4 pt-1 text-gray-600 border-t border-gray-100">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      
    </div>
    </Container>
    
  );
};

export default FAQ;