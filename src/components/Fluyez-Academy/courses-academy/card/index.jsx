"use client"

import Image from 'next/image';

const Card = ({ title, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <Image src={image} alt={title} className="w-full h-52 object-cover rounded-lg" width={258} height={200} />
      <h3 className="text-xl font-bold mt-4">{title}</h3>
      {/* <p className="text-gray-600 mt-2">{description}</p> */}
    </div>
  );
};

export default Card;
