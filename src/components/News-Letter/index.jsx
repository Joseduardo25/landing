'use client'
import Image from "next/image";
const NewsletterBanner = () => {
  return (
    <div className="bg-[#000D59] max-w-[1224px] rounded-3xl py-8 px-6 flex mx-auto ">
      {/* Contenedor del texto y formulario */}
      <div className="text-white">
        <h2 className="text-2xl font-bold">
          ¡Entérate de todas las novedades del mundo cripto!
        </h2>
        <div className="mt-4 flex max-w-[538px]">
          {/* Campo de entrada de correo */}
          <input
            type="email"
            placeholder="Ingresa tu correo electrónico"
            className=" bg-white text-gray-600 rounded-lg py-3.5 px-6 focus:outline-none w-full"
          />
          {/* Botón de suscripción */}
          <button className="bg-[#265FF1] text-white font-semibold py-3.5 px-6 ml-4 rounded-lg hover:bg-blue-600 transition">
            Suscribirme
          </button>
        </div>
      </div>

      {/* Imágenes decorativas */}
      {/* <div className="absolute right-4 flex items-center space-x-2">
        <Image src="/path-to-image/tether-icon.png" alt="Tether" className="w-10 h-10" />
        <Image src="/path-to-image/ethereum-icon.png" alt="Ethereum" className="w-10 h-10" />
        <Image src="/path-to-image/bitcoin-icon.png" alt="Bitcoin" className="w-12 h-12" />
      </div> */}
    </div>
  );
};

export default NewsletterBanner;
