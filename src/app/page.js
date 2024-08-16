import Image from "next/image"
import LogoFluyez from "/public/assets/images/Fluyez-logo.png"
import DesktopMan from "/public/assets/images/fluyez-man-desktop.png"
import MobileMan from "/public/assets/images/fluyez-man-mobile.png"
import MenuMobile from "/public/assets/icons/menu-icon-mobile.png"
import IconWorld from "/public/assets/icons/global-outlined.png"
import IconSafe from "/public/assets/icons/safe-lock-line.png"
import IconCoins from "/public/assets/icons/coins.png"
import IconHat from "/public/assets/icons/fluent_hat-graduation.png"
import Certificate from "/public/assets/images/certificate.png"
import Slider from "@/components/courses-slider"
import TestimonialsCarousel from "@/components/carousel-testimonials"
import Dapps from "/public/assets/images/Dapps.png"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
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


      <section className="text-center my-44">
        <h2 className="text-blue-700 font-semibold">Creado por Fluyez</h2>
        <h1 className="text-5xl font-bold my-10">Plataforma líder crypto en Perú</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-8">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
              <Image src={IconWorld} alt="Worl" />
            </div>
            <p className="mt-2">+5 millones de usuarios peruanos en nuestra plataforma</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
              <Image src={IconSafe} alt="Safe" />
            </div>
            <p className="mt-2">Un espacio seguro para aprender sobre criptomonedas</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
              <Image src={IconCoins} alt="Coins" />
            </div>
            <p className="mt-2">+150 criptomonedas disponibles</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
              <Image src={IconHat} alt="Hat" />
            </div>
            <p className="mt-2">Formación profesional diseñada por expertos en el rubro</p>
          </div>
        </div>
      </section>

      <section className="text-center my-20">
        <h2 className="text-blue-700 font-semibold">Cursos GRATUITOS recomendados</h2>
        <h1 className="text-5xl font-bold my-4 max-w-3xl mx-auto leading-normal">Empieza por lo básico y <span class="bg-yellow-200"> conviértete en experto</span></h1>
        <div className="flex flex-wrap justify-center gap-2 my-4">
          <button className="px-4 py-2 bg-blue-100 rounded-full">Destacados</button>
          <button className="px-4 py-2 bg-blue-100 rounded-full">Blockchain</button>
          <button className="px-4 py-2 bg-blue-100 rounded-full">Bitcoin</button>
          <button className="px-4 py-2 bg-blue-100 rounded-full">Ethereum</button>
          <button className="px-4 py-2 bg-blue-100 rounded-full">DEFI</button>
          <button className="px-4 py-2 bg-blue-100 rounded-full">Tecnología</button>
        </div>
      </section>


      <section className="container mx-auto">
        <Slider />
      </section>

      <section className="flex flex-col lg:flex-row items-center lg:items-start justify-between lg:gap-12 px-6 lg:px-20 py-12 lg:py-44">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-lg font-semibold text-blue-600 mb-2">Certificaciones</h2>
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Conviértete en un experto certificado en Blockchain
          </h1>
          <p className="text-gray-600 mb-6">
            Fluyez Academy ya ha ayudado a una gran cantidad de personas alrededor del mundo. ¿Quieres ser el próximo?
          </p>
          <a
            href="#"
            className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition"
          >
            Empieza aquí
          </a>
        </div>

        <div className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
          <div className="relative w-full max-w-sm">
            <Image
              src={Certificate} // Reemplaza esto con la ruta correcta de la imagen
              alt="Certificado de Finalización"
              width={1024}
              height={512}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>


      <div className="py-20 px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
          Miles de personas confían en nosotros
        </h2>
        <TestimonialsCarousel />
      </div>



      <section className="flex flex-col lg:flex-row items-center lg:items-start justify-between lg:gap-12 px-6 lg:px-20 py-12 lg:py-44">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-lg font-semibold text-blue-600 mb-2">Certificaciones</h2>
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Empieza a aprender y construye Dapps en la Web3
          </h1>
          <p className="text-gray-600 mb-6">
            ¡Consigue oportunidades rápidamente con Fluyez academy y entra a la Web3 ahora!
          </p>
          <a
            href="#"
            className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition"
          >
            Empieza aquí
          </a>
        </div>

        <div className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
          <div className="relative w-full max-w-sm">
            <Image
              src={Dapps} // Reemplaza esto con la ruta correcta de la imagen
              alt="Certificado de Finalización"
              width={1024}
              height={512}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>







      
    <Footer/>
    </>
  )
}
