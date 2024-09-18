'use client'
import 'swiper/css'
import 'swiper/css/pagination'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import DataTestimonials from './data/testimonials.json'
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules'

const SliderTestimonials = () => {
  console.log(DataTestimonials.id, 'DATA')
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15
        },
        678: {
          slidesPerView: 3,
          spaceBetween: 24
        }
      }}

      freeMode={true}

      pagination={{
        clickable: true
      }}

      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className='h-[520px] w-full md:max-w-[1200px]'
    >
      {DataTestimonials.map(({ id, name, role, image, testimonial }) => (
        <SwiperSlide key={id} className="bg-[#FFFFFF] h-2/4 rounded-lg shadow-lg  w-full lg:w-1/3 flex-shrink-0">
          {/* // <SwiperSlide key={id} className="border-2 border-blue-500"> */}
          {/* <div className="bg-white rounded-lg shadow-lg p-6 mx-2 w-full lg:w-1/3 flex-shrink-0"> */}
          <div className=" items-center space-x-4 mb-4">
            <Image
              src={image}
              alt={name}
              width={384}
              height={200}
              className="rounded-lg w-full h-full"
            />
            <div className='pr-6 pl-2 py-4'>
              <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
              <p className="text-blue-600">{role}</p>
              <p className="text-gray-600">{testimonial}</p>
            </div>
          </div>
          {/* </div> */}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SliderTestimonials