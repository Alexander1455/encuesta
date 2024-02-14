const LandigPage = () => {
  return (
    <div className="">
      <div>
        {/*introducction*/}
        <section className="grid grid-cols-1 2xl:grid-cols-2 bg-[#3a79c0] items-center">

            <div className="px-40 py-24 lg:w-3/4">
              <div className="w-full">
                <h1 className="mb-2 text-7xl font-medium text-white ">
                  EncuestaPlus
                </h1>
                <p className="text-2xl py-5 text-pretty">
                  En EncuestaPlus, creemos en la importancia de dar voz a todos.
                  Ya sea que estés buscando entender mejor a tu audiencia o
                  simplemente quieras compartir tus pensamientos de manera
                  anónima, hemos creado la plataforma perfecta para ti. Descubre
                  el poder de tus opiniones con EncuestaPlus.
                </p>
                <button className="border rounded-lg text-xl px-6 py-3">
                  Registrate
                </button>
              </div>
            </div>

            <div className="items-center flex justify-center">
              <div className="">
                <img src="./src/images/logo.webp" className=""/>
              </div>
            </div>

        </section>

        {/*Sobre Nosotros*/}
        <section className="bg-[#4e86c6] size">
          <div className="mx-auto max-w-5xl px-6 py-16 text-center">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-3xl font-semibold text-gray-800">
                Sobre Nosotros
              </h2>
              <div className="w-72 border-b-4 py-1 border-white"></div>
            </div>
            <p className="mt-20 text-white text-2xl">
              Bienvenido a EncuestaPlus, la plataforma líder en la creación y
              participación de encuestas personalizadas. Nos dedicamos a
              proporcionar a nuestros usuarios una experiencia fácil, intuitiva
              y significativa para obtener información valiosa.
            </p>
          </div>
        </section>

        {/*Team*/}
        <section className="py-10 bg-[#6194cd]">
          <div className="mb-12 flex flex-col items-center justify-center">
            <h2 className="text-5xl font-semibold text-gray-800">Team</h2>
            <div className="w-36 border-b-4 py-1 text-white"></div>
          </div>
          <div className="grid gap-2 md:grid-cols-4 content-center">
            <div className="relative mx-1">
              <div>
                <div className="p-6">
                  <h2 className="mb-2 text-2xl font-medium text-gray-800"></h2>
                </div>
              </div>
            </div>
            <div className="relative mx-1">
              <div className="rounded-lg bg-white shadow-md">
                <img
                  src="./src/images/Alex.webp"
                  className="w-full rounded-t-lg"
                />
                <div className="p-6">
                  <h2 className="mb-2 text-2xl font-medium text-gray-800">
                    Alexander Rivera
                  </h2>
                  <a href="#" className="text-base">
                  Encargado del desarrollo del frontend. Alexander se encarga de diseñar y desarrollar la interfaz de usuario de EncuestaPlus. Su enfoque está en crear una experiencia de usuario intuitiva y atractiva que permita a los usuarios interactuar fácilmente con la plataforma.
                  </a>
                </div>
              </div>
            </div>
            <div className="relative mx-1">
              <div className="rounded-lg bg-white shadow-md">
                <img
                  src="./src/images/Diego.webp"
                  className="w-full rounded-t-lg"
                />
                <div className="p-5">
                  <h2 className="mb-2 text-2xl font-medium text-gray-800">
                    Diego Monroy
                  </h2>
                  <a href="#" className="text-base">
                  Encargado del desarrollo del backend. Diego se encarga de construir y mantener la infraestructura tecnológica que respalda el funcionamiento de EncuestaPlus. Esto incluye el manejo de bases de datos, la implementación de lógica de negocio y la garantía de un rendimiento óptimo y seguro del sistema.
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*Servicios*/}
        <section className="bg-[#346dad]">
          <div className="container mx-auto px-24 py-24">
            <div className="mb-12 flex flex-col items-center justify-center">
              <h3 className="text-3xl">Our Services</h3>
              <div className="w-48 border-b-4 py-1 border-white-400"></div>
            </div>
            <div className="m-4 flex flex-wrap text-center">
              <div className="w-full p-4 lg:w-1/3">
                <div className="rounded-lg border-2 border-gray-200 px-4 py-6">

                  <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke-width="1.5" 
                  stroke="currentColor" 
                  className="mb-3 inline-block h-20 w-20 text-white"
                  >
                  <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round"
                  stroke-width="2" 
                  d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                  </svg>

                  <h2 className="title-font text-3xl font-medium text-gray-900">
                    Creación de Encuestas Personalizadas
                  </h2>
                  <p className="leading-relaxed">
                    Diseña encuestas adaptadas a tus necesidades.
                  </p>
                </div>
              </div>
              <div className="w-full p-4 lg:w-1/3">
                <div className="rounded-lg border-2 border-gray-200 px-4 py-6">
                  <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24"
                  stroke="currentColor" 
                  className="mb-3 inline-block h-20 w-20 text-white"
                  >
                  <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                  </svg>

                  <h2 className="title-font text-3xl font-medium text-gray-900">
                    Estadísticas Detalladas
                  </h2>
                  <p className="leading-relaxed py-4">
                    Obtén análisis en tiempo real de tus encuestas.
                  </p>
                </div>
              </div>
              <div className="w-full p-4 lg:w-1/3">
                <div className="rounded-lg border-2 border-gray-200 px-4 py-6">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke-width="1.5" 
                    stroke="currentColor" 
                    className="mb-3 inline-block h-20 w-20 text-white"
                  >
                    <path 
                      stroke-linecap="round" 
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>

                  <h2 className="title-font text-3xl font-medium text-gray-900">
                    Búsqueda de Encuestas
                  </h2>
                  <p className="leading-relaxed py-4">
                    Encuentra encuestas relevantes con facilidad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandigPage;
