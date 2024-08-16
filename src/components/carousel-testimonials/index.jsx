"use client"
import { useState, useEffect } from 'react';
import TestimonialCard from './card';
import testimonials from './data/testimonials.json';

export default function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = testimonials.length - 1;
    } else if (newIndex >= testimonials.length) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(activeIndex + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{
          transform: `translateX(-${activeIndex * (100 / 3)}%)`,
        }}
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.id}
            name={testimonial.name}
            role={testimonial.role}
            image={testimonial.image}
            testimonial={testimonial.testimonial}
          />
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full bg-gray-300 ${
              activeIndex === index ? 'bg-blue-600 w-10' : ''
            } transition-all duration-300`}
          ></div>
        ))}
      </div>
    </div>
  );
}
