import Image from "next/image"
import LogoFluyez from "../../assets/images/Fluyez-logo.png"
import DesktopMan from "../../assets/images/fluyez-man-desktop.png"
import MobileMan from "../../assets/images/fluyez-man-mobile.png"
import MenuMobile from "../../assets/icons/menu-icon-mobile.png"

export default function Home() {
  return (
    <>
      {/* <!-- Navbar --> */}
      <nav class="bg-white shadow-lg">
        <div class="container mx-auto px-4">
          <div class="flex items-center justify-between">
            {/* <!-- Logo --> */}
            <div class="flex items-center space-x-2">
              <Image src={LogoFluyez} alt="Logo" class="h-8 w-auto" />
              {/* <span class="text-xl font-bold text-blue-700">fluyez<span class="text-gray-900">academy.</span></span> */}
            </div>
            {/* <!-- Navigation Links --> */}
            <div class="hidden md:flex items-center space-x-4">
              <a href="#" class="text-gray-700 hover:text-blue-700">Cursos</a>
              <a href="#" class="text-gray-700 hover:text-blue-700">Blog</a>
              <a href="#" class="text-gray-700 hover:text-blue-700">Glosario</a>
              <a href="#" class="text-gray-700 hover:text-blue-700">Perú</a>
              <a href="#" class="text-gray-700 hover:text-blue-700">Nosotros</a>
              <a href="#" class="text-gray-700 hover:text-blue-700">Productos</a>
              <a href="#" class="text-gray-700 hover:text-blue-700">Contacto</a>
            </div>
            <div>
            <Image src={MenuMobile} alt="Logo" class="h-8 w-auto block md:hidden" />
            </div>
          </div>
        </div>
      </nav>

      {/* <!-- Banner --> */}
      <div class="bg-blue-600 text-white py-2">
        <div class="container mx-auto px-4 flex justify-between items-center">
          <div>
            <span>📚 ¿Estás buscando potenciar tu aprendizaje? ¡Agenda una reunión con un asesor!</span>
          </div>
          <div>
            <button class="bg-white text-blue-600 px-4 py-1 rounded-full hover:bg-gray-200">Contactar</button>
            <button class="text-white ml-4">✕</button>
          </div>
        </div>
      </div>


      {/* <!-- Hero Section --> */}
      <section class="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center">
        {/* <!-- Text Content --> */}
        <div class="md:w-1/2 mt-8 md:mt-0">
          <h1 class="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Aprende gratis sobre <br /><span class="bg-yellow-200">Criptomonedas</span> y <span class="bg-yellow-200">Blockchain</span></h1>
          <p class="text-gray-600 mb-6">La mejor guía sobre criptomonedas. Sigue tu propio ritmo, muy fácil y sobre todo en español. Entiende de una vez por todas la tecnología que está revolucionando al mundo entero.</p>
          <button class="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 hidden md:block">Empieza aquí</button>
        </div>
        {/* <!-- Image Content --> */}
        <div class="md:w-1/2">
          <Image src={DesktopMan} alt="Criptomonedas" class="hidden md:block" />
          <Image src={MobileMan} alt="Criptomonedas" class="block md:hidden" />
        </div>
        <button class="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 block md:hidden ">Empieza aquí</button>
      </section>
    </>
  )
}
