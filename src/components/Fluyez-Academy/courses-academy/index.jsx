"use client"
import Card from './card';
// import courses from './data/data.json';

export default function CoursesAcademy({courses}) {
  const { title, content, relatedCourses } = courses;

  return (
    <div className="container mx-auto px-4 py-4">
      
      <div className='block md:flex'>


      <section className="my-8 max-w-md pr-16">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-gray-600 mt-2">
          {content}
        </p>
        <a href="#" className="text-blue-500 mt-4 inline-block">Ver todos &rarr;</a>
      </section>
      <div className="block md:grid gap-4 lg:grid-cols-3">
        {relatedCourses.map((course) => (
          <Card
            key={course.id}
            title={course.title}
            // description={course.description}
            image={course.image}
            />
          ))}
      </div>
          </div>
    </div>
  );
}
