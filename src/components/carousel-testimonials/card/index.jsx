"use client"
import Image from 'next/image';

export default function TestimonialCard({ name, role, image, testimonial }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mx-2 w-full lg:w-1/3 flex-shrink-0">
      <div className="flex items-center space-x-4 mb-4">
        <Image
          src={image}
          alt={name}
          width={64}
          height={64}
          className="rounded-full"
        />
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
          <p className="text-blue-600">{role}</p>
        </div>
      </div>
      <p className="text-gray-600">{testimonial}</p>
    </div>
  );
}
