"use client"

import { useState, useRef, useEffect } from 'react';

const faqs = [
  { question: "¿Lorem ipsum dolor sit amet?", answer: "Lorem ipsum dolor sit amet consectetur. Consequat quis dolor mauris pharetra id luctus..." },
  { question: "¿Lorem ipsum dolor sit amet?", answer: "Lorem ipsum dolor sit amet consectetur. Ac facilisis molestie morbi quis vitae..." },
  { question: "¿Lorem ipsum dolor sit amet?", answer: "" },
  { question: "¿Lorem ipsum dolor sit amet consectetur?", answer: "" },
  { question: "¿Lorem ipsum dolor sit amet consectetur?", answer: "" },
  { question: "¿Lorem ipsum dolor sit amet consectetur?", answer: "" },
  { question: "¿Lorem ipsum dolor sit amet?", answer: "" },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    // Asegurar que solo la pregunta activa se expande y el resto se colapsa
    contentRefs.current.forEach((ref, idx) => {
      if (ref) {
        if (idx === activeIndex) {
          ref.style.maxHeight = `${ref.scrollHeight}px`;
        } else {
          ref.style.maxHeight = '0px';
        }
      }
    });
  }, [activeIndex]);

  return (
    <section className="w-full px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Preguntas frecuentes</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={` overflow-hidden transition-all duration-500 ${activeIndex === index ? '' : ''}`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center border-b-4 border-gray-200 p-4 text-left text-lg md:text-xl font-semibold focus:outline-none"
            >
              <span>{faq.question}</span>
              <span>{activeIndex === index ? '-' : '+'}</span>
            </button>
            <div
              ref={(el) => (contentRefs.current[index] = el)}
              className="px-4 overflow-hidden transition-all duration-500 ease-in-out max-h-0 text-gray-600"
            >
              <p className="py-2">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
