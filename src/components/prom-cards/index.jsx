'use client'
import Image from 'next/image';

const PromoCards = () => {
  return (
    <div >
      {/* Contenedor padre que cambia según el tamaño de pantalla */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-16">
        {/* Tarjeta 1 */}
        <div className="bg-[#FFFABF]  max-w-[568px] max-h-[348px] rounded-lg  p-8 flex flex-col md:flex-row items-start space-y-4">
          {/* <div className='flex flex-col border-2 border-sky-500 md:gap-2'> */}
          {/* <div className='flex flex-col md:gap-2'> */}
          <div className=''>
          <h2 className="text-2xl font-bold text-gray-800">
            ¿La jerga de las criptomonedas te confunden?
          </h2>
          <p className="text-gray-600">
            Échale un vistazo más en detalle a nuestro glosario sobre cadenas de bloques y criptomonedas.
          </p>
          <button className="bg-white text-[#1F2A37] font-semibold border border-[#ABB5C2] px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition">
            Llévame al glosario
          </button>
            </div>
            <div>
          <Image
            src="/assets/images/prom-cards/crypto-confuse.png" // Reemplaza con la ruta de tu imagen
            alt="Confusión sobre criptomonedas"
            width={211}
            height={211}
            className="self-center max-w-[211px] max-h-[211px]"
            />

            </div>
        </div>

        {/* Tarjeta 2 */}
        <div className="bg-[#FFDCD3] max-w-[568px] max-h-[348px] rounded-lg  p-8 flex flex-col md:flex-row items-start space-y-4">
          {/* <div className='flex flex-col md:gap-2'> */}
          <div className=''>

          <h2 className="text-2xl font-bold text-gray-800 max-w-[200px]">
            ¿Quieres más material didáctico?
          </h2>
          <p className="text-gray-600">
            Échale un vistazo a nuestro contenido en Youtube donde encontrarás entrevistas, cursos en línea y mucho más.
          </p>
          <button className="bg-white text-[#1F2A37] font-semibold border border-[#ABB5C2] px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition">
            Visita nuestro canal
          </button>
            </div>
            <div>
          <Image
            src="/assets/images/prom-cards/play-youtube.png" // Reemplaza con la ruta de tu imagen
            alt="Contenido en Youtube"
            width={211}
            height={211}
            className="self-center max-w-[211px] max-h-[211px]"
            />
            </div>
        </div>
      </div>
    </div>
  );
};

export default PromoCards;
