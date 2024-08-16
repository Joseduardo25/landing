"use client"

import Image from "next/image"
import IconInstagram from "/public/assets/icons/footer/instagram.png"
import IconFacebbok from "/public/assets/icons/footer/facebook.png"
import IconLinkedIn from"/public/assets/icons/footer/linkedin.png"
import IconYoutube from "/public/assets/icons/footer/youtube.png"
import IconWhatsapp from "/public/assets/icons/footer/whatsapp.png"
import IconFluyez from "/public/assets/icons/footer/Fluyez.png"
import LibroReclamaciones from "/public/assets/images/footer/libro-reclamaciones.png"
import IconPhone from "/public/assets/icons/footer/call.png"
import IconMail from "/public/assets/icons/footer/message.png"
import IconTime from "/public/assets/icons/footer/timeCircle.png"

const Footer = () => {
  return (
    <footer class="bg-[#000D59] text-white py-8">
  <div class="container mx-auto px-4 flex flex-col lg:flex-row lg:justify-between">
    {/* <!-- Logo y Descripción --> */}
    <div class="mb-8 text-center lg:text-left">
      <div class="mb-4">
        <Image src={IconFluyez} alt="Fluyez Logo" width={18} height={24} class="h-8 mx-auto lg:mx-0"/>
      </div>
      <p class="text-sm max-w-xs mx-auto lg:mx-0">
        Fluyez es una marca registrada de Fluyez Digital Investments S.A.C para la venta de Bitcoins online.
      </p>
      <div class="mt-4">
        <a href="#" class="flex justify-center lg:justify-start items-center text-sm">
          <Image src={LibroReclamaciones} width={180} height={73} alt="Libro de reclamaciones" class="h-20 mr-2"/>
          {/* Libro de reclamaciones */}
        </a>
      </div>
    </div>

    {/* <!-- Recursos --> */}
    <div class="mb-8 text-center lg:text-left">
      <h4 class="font-semibold mb-4">RECURSOS</h4>
      <ul class="text-sm space-y-2">
        <li><a href="#" class="hover:text-gray-300">Tipo de cambio SUNAT</a></li>
        <li><a href="#" class="hover:text-gray-300">Tipo de cambio SBS</a></li>
        <li><a href="#" class="hover:text-gray-300">Calculadora Paypal</a></li>
        <li><a href="#" class="hover:text-gray-300">Bitcoin a Soles</a></li>
        <li><a href="#" class="hover:text-gray-300">Ethereum a Soles</a></li>
        <li><a href="#" class="hover:text-gray-300">Jet Perú</a></li>
        <li><a href="#" class="hover:text-gray-300">Tkambio</a></li>
        <li><a href="#" class="hover:text-gray-300">Localbitcoin</a></li>
        <li><a href="#" class="hover:text-gray-300">Buenbit</a></li>
        <li><a href="#" class="hover:text-gray-300">Binance Perú</a></li>
        <li><a href="#" class="hover:text-gray-300">Moneygram Perú</a></li>
      </ul>
    </div>

    {/* <!-- Compañía --> */}
    <div class="mb-8 text-center lg:text-left">
      <h4 class="font-semibold mb-4">COMPAÑÍA</h4>
      <ul class="text-sm space-y-2">
        <li><a href="#" class="hover:text-gray-300">Nosotros</a></li>
        <li><a href="#" class="hover:text-gray-300">Contacto</a></li>
        <li><a href="#" class="hover:text-gray-300">Iniciar sesión</a></li>
        <li><a href="#" class="hover:text-gray-300">Registro</a></li>
        <li><a href="#" class="hover:text-gray-300">Términos y Condiciones</a></li>
        <li><a href="#" class="hover:text-gray-300">Políticas de Privacidad</a></li>
      </ul>
    </div>

    {/* <!-- Contacto --> */}
    <div class="text-center lg:text-left">
      <h4 class="font-semibold mb-4">CONTACTO</h4>
      <ul class="text-sm space-y-2">
        <li class="flex justify-center lg:justify-start items-center">
        <a href="#" class="hover:text-gray-300"><Image src={IconPhone} width={24} height={24} alt="Instagram" class="h-5 w-5 mr-2 "/></a>

          972 152 114
        </li>
        <li class="flex justify-center lg:justify-start items-center">
        <a href="#" class="hover:text-gray-300"><Image src={IconMail} width={24} height={24} alt="Instagram" class="h-5 w-5 mr-2 "/></a>

          hola@fluyez.com
        </li>
        <li class="flex justify-center lg:justify-start items-center">
        <a href="#" class="hover:text-gray-300"><Image src={IconTime} width={24} height={24} alt="Instagram" class="h-5 w-5 mr-2 "/></a>

          Lunes a Viernes 9AM - 8PM
        </li>
      </ul>
      <div class="mt-4 flex justify-center lg:justify-start space-x-4">
        <a href="#" class="hover:text-gray-300"><Image src={IconInstagram} width={24} height={24} alt="Instagram" class="h-6"/></a>
        <a href="#" class="hover:text-gray-300"><Image src={IconFacebbok} width={24} height={24} alt="Facebook" class="h-6"/></a>
        <a href="#" class="hover:text-gray-300"><Image src={IconLinkedIn} width={24} height={24} alt="LinkedIn" class="h-6"/></a>
        <a href="#" class="hover:text-gray-300"><Image src={IconYoutube} width={24} height={24} alt="YouTube" class="h-6"/></a>
        <a href="#" class="hover:text-gray-300"><Image src={IconWhatsapp} width={24} height={24} alt="WhatsApp" class="h-6"/></a>
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer