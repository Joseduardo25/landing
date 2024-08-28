"use client"
import Image from "next/image"
import LogoFluyez from "/public/assets/images/Fluyez-logo.png"
import DesktopManAcademy from "/public/assets/images/fluyez-man-academy-desktop.png"
import MobileManAcademy from "/public/assets/images/fluyez-man-academy-mobile.png"
import MenuMobile from "/public/assets/icons/menu-icon-mobile.png"
import Footer from "@/components/footer"
import CoursesAcademy from "@/components/Fluyez-Academy/courses-academy"
import courses from "@/components/Fluyez-Academy/courses-academy/data/data.json"

const Academy = () => {
  return (<>
    {/* <!-- Navbar --> */}
    <nav class="bg-white  my-5">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between">
          {/* <!-- Logo --> */}
          <div class="flex items-center space-x-2">
            <Image src={LogoFluyez} alt="Logo" class="h-8 w-auto" />
            {/* <span class="text-xl font-bold text-blue-700">fluyez<span class="text-gray-900">academy.</span></span> */}
          </div>
          {/* <!-- Navigation Links --> */}
          <div class="hidden md:flex items-center space-x-8">
            <a href="#" class="text-gray-700 hover:text-blue-700">Cursos</a>
            <a href="#" class="text-gray-700 hover:text-blue-700">Blog</a>
            <a href="#" class="text-gray-700 hover:text-blue-700">Glosario</a>
            <a href="#" class="text-gray-700 hover:text-blue-700">Perú</a>
            <a href="#" class="text-gray-700 hover:text-blue-700">Nosotros</a>
            <a href="#" class="text-gray-700 hover:text-blue-700">Productos</a>
            <a href="#" class="text-gray-700 hover:text-blue-700">Contacto</a>
          </div>
          <div className="md:hidden">
            <Image src={MenuMobile} alt="Logo" class="h-8 w-auto block md:hidden" />
          </div>
        </div>
      </div>
    </nav>


    {/* <!-- Hero Section --> */}
    <section class="container mx-auto px-4 py-8 flex flex-row items-center">
      {/* <!-- Text Content --> */}
      <div class="w-1/2 mt-8 md:mt-0">
        <h2 className="text-lg font-semibold text-blue-600 mb-2">¡Aprende sobre crypto<br /> con nosotros!</h2>
        <h1 class="text-4xl md:text-5xl font-bold text-blue-900 mb-4 max-w-[400px]">Cursos de Fluyez Academy</h1>
        {/* <button class="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 hidden md:block">Empieza aquí</button> */}
      </div>
      {/* <!-- Image Content --> */}
      <div class="w-1/2">
        <Image src={DesktopManAcademy} alt="Criptomonedas" class="hidden md:block md:ml-auto" />
        <Image src={MobileManAcademy} alt="Criptomonedas" class="block md:hidden" />
      </div>
      {/* <button class="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 block md:hidden ">Empieza aquí</button> */}
    </section>
    <div className="container mx-auto px-4 py-4">


      <div className="block md:flex justify-between items-center my-8">
        <input
          type="text"
          placeholder="Buscar cursos..."
          className="border mb-6 md:mb-0 rounded-lg p-2 w-full md:w-1/3"
        />
        <div className="flex items-center">
          <p className="min-w-24 mr-4">Ordenar por</p>
          <select className="w-full border rounded-lg p-2">
            <option>Todos los niveles</option>
          </select>
        </div>
      </div>
    </div>
    < div className="mb-40">
      <CoursesAcademy courses={courses.cursos_1} />
      <CoursesAcademy courses={courses.cursos_2} />
      <CoursesAcademy courses={courses.cursos_3} />
      <CoursesAcademy courses={courses.cursos_4} />
    </div>



    <Footer />
  </>
  )
}

export default Academy