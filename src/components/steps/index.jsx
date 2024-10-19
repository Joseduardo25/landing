"use client"

// import backgroundLine from '../../../public/assets/images/background-line.png'

const Steps = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center mx-auto max-w-6xl">
      {/* Título */}
      {/* <div className="text-center my-8 lg:my-0 lg:mb-12">
        <h2 className="text-[#7AA9FF] font-bold text-lg">Empieza tu educación</h2>
        <h1 className="text-3xl lg:text-4xl font-bold my-4">¿Cómo funciona?</h1>
      </div> */}

      {/* Contenedor de los pasos */}
      <div className="flex flex-col lg:flex-row justify-between items-center w-full space-y-8 lg:space-y-0 lg:space-x-8 bg-[url('/assets/images/background-line.png')] bg-no-repeat lg:relative lg:py-16">
        {/* Paso 01 */}
        <div className="text-center lg:relative top-[25px]">
          <div className="bg-white shadow-lg rounded-full w-16 h-16 flex items-center justify-center mx-auto">
            <span className="text-2xl font-bold text-[#7AA9FF]">01</span>
          </div>
          <h3 className="font-bold mt-4">Escoge un curso</h3>
          <p className="text-sm text-gray-500 max-w-[185px]">Empieza en Fluyez Academy un curso de tu elección</p>
        </div>

        {/* Paso 02 */}
        <div className="text-center lg:relative bottom-[87px]">
          <div className="bg-white shadow-lg rounded-full w-16 h-16 flex items-center justify-center mx-auto">
            <span className="text-2xl font-bold text-[#7AA9FF]">02</span>
          </div>
          <h3 className="font-bold mt-4 max-w-[172px] mx-auto">Asiste a las clases online</h3>
          <p className="text-sm text-gray-500 max-w-[185px]">Tendrás 2 clases interactivas al tiempo de tu preferencia.</p>
        </div>

        {/* Paso 03 */}
        <div className="text-center lg:relative top-[53px]">
          <div className="bg-white shadow-lg rounded-full w-16 h-16 flex items-center justify-center mx-auto">
            <span className="text-2xl font-bold text-[#7AA9FF]">03</span>
          </div>
          <h3 className="font-bold mt-4 max-w-[170px] mx-auto">Aplica tus habilidades</h3>
          <p className="text-sm text-gray-500 max-w-[200px]">Resuelve tus evaluaciones y actividades semanales.</p>
        </div>

        {/* Paso 04 */}
        <div className="text-center lg:relative bottom-[86px]">
          <div className="bg-white shadow-lg rounded-full w-16 h-16 flex items-center justify-center mx-auto">
            <span className="text-2xl font-bold text-[#7AA9FF]">04</span>
          </div>
          <h3 className="font-bold mt-4 max-w-[170px] mx-auto">Consigue tu certificado</h3>
          <p className="text-sm text-gray-500 max-w-[200px]">Muestra tu crecimiento y crece profesionalmente.</p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
