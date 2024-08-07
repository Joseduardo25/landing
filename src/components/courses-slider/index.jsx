"use client"
import React, { useState } from 'react';
import Card from './card';
import courses from './data/courses.json';

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 2) % courses.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 2 + courses.length) % courses.length);
    };

    return (
        <div className="my-10">
            <div className="flex justify-between items-center">
                <button onClick={prevSlide} className="bg-blue-500 text-white p-2 rounded-full">
                    Prev
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {courses.slice(currentIndex, currentIndex + 2).map((course, index) => (
                        <Card key={index} course={course} />
                    ))}
                </div>
                <button onClick={nextSlide} className="bg-blue-500 text-white p-2 rounded-full">
                    Next
                </button>
            </div>
            <div className="flex justify-center mt-4">
                {courses.map((_, index) => (
                    <div
                        key={index}
                        className={`h-2 w-2 mx-1 rounded-full ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Slider;
