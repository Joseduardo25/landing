"use client"
import Card from './card';
import courses from './data/data.json';

export default function CoursesAcademy() {
  return (
    <div className="container mx-auto px-4 py-4">
      
      <div className='flex'>


      <section className="my-8">
        <h2 className="text-2xl font-bold">Fundamentos básicos</h2>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet consectetur. Id pharetra ut pellentesque risus pharetra platea nunc a. Eu enim mauris odio tortor eu pellentesque proin.
        </p>
        <a href="#" className="text-blue-500 mt-4 inline-block">Ver todos &rarr;</a>
      </section>
      <div className="grid gap-4 lg:grid-cols-3">
        {courses.map((course) => (
          <Card
            key={course.id}
            title={course.title}
            description={course.description}
            image={course.image}
            />
          ))}
      </div>
          </div>
    </div>
  );
}
