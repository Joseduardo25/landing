"use client"
import Image from 'next/image';
import React from 'react';

const Card = ({ course }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image className="w-full h-40 object-cover" src={course.image} alt={course.title} width={350} height={270} objectFit='contain' />
            <div className="p-4">
                <span className="text-sm text-gray-500">{course.category}</span>
                <h3 className="text-xl font-semibold my-2">{course.title}</h3>
                <p className="text-sm text-gray-600">{course.description}</p>
                <div className="flex justify-between items-center mt-4">
                    <span className={`text-xs font-semibold ${course.level === 'Principiante' ? 'text-blue-500' : 'text-green-500'}`}>{course.level}</span>
                    <span className="text-xs text-gray-500">{course.date}</span>
                </div>
            </div>
        </div>
    );
};

export default Card;
