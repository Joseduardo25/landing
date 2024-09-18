'use client'
import 'swiper/css'
import 'swiper/css/pagination'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import DataCourses from './data/courses.json'
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules'

const SliderCourses = () => {
  console.log(DataCourses.id, 'DATA')
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15
        },
        678: {
          slidesPerView: 2,
          spaceBetween: 48
        }
      }}

      freeMode={true}

      pagination={{
        clickable: true
      }}

      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className='h-[470px] w-full md:max-w-[1200px]'
    >
      {DataCourses.map(({ id, date, image, title, category, description, level }) => (
        <SwiperSlide key={id} className="bg-[#FFFFFF] h-2/4 rounded-lg shadow-lg  w-full lg:w-1/3 flex-shrink-0">


          <div className="bg-white rounded-lg overflow-hidden">
            <Image className="w-full h-full rounded-lg" 
            src={image}
            alt={title} 
            width={576} 
            height={200} 
            objectFit='contain'
            />
            <div className="p-4">
                <span className="text-sm text-gray-500">{category}</span>
                <h3 className="text-xl font-semibold my-2">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
                <div className="flex justify-between items-center mt-4">
                    <span className={`text-xs font-semibold ${level === 'Principiante' ? 'text-blue-500' : 'text-green-500'}`}>{level}</span>
                    <span className="text-xs text-gray-500">{date}</span>
                </div>
            </div>
        </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SliderCourses