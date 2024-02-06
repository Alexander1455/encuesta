const LandigPage = () => {
  return (
    <div className="">
      <div>
        {/*introducction*/}
        <section className="grid grid-cols-1 2xl:grid-cols-2 bg-cyan-600 items-center border-2 border-x-indigo-500">

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
        <section className="bg-sky-600 size">
          <div className="mx-auto max-w-5xl px-6 py-16 text-center">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-3xl font-semibold text-gray-800">
                Sobre Nosotros
              </h2>
              <div className="w-72 border-b-4 border-orange-300"></div>
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
        <section className="container mx-auto mt-20 content-normal py-10 ">
          <div className="mb-12 flex flex-col items-center justify-center">
            <h2 className="text-5xl font-semibold text-gray-800">Team</h2>
            <div className="w-24 border-b-4 border-yellow-400"></div>
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
                  src="./src/images/Hola.jpg"
                  className="w-full rounded-t-lg"
                />
                <div className="p-6">
                  <h2 className="mb-2 text-2xl font-medium text-gray-800">
                    Alexander Rivera
                  </h2>
                  <a href="#" className="text-base">
                    Amante de la tecnología y la toma de decisiones basada en
                    datos, Juan es el cerebro detrás de EncuestaPlus. Con una
                    visión clara de empoderar a las personas a través de sus
                    opiniones, lidera el camino hacia un mundo más informado.
                  </a>
                </div>
              </div>
            </div>
            <div className="relative mx-1">
              <div className="rounded-lg bg-white shadow-md">
                <img
                  src="https://source.unsplash.com/collection/190727/300x300"
                  className="w-full rounded-t-lg"
                />
                <div className="p-6">
                  <h2 className="mb-2 text-2xl font-medium text-gray-800">
                    Diego Monroy
                  </h2>
                  <a href="#" className="text-base">
                    Con habilidades técnicas excepcionales y una pasión por la
                    innovación, María es la fuerza impulsora detrás de la
                    plataforma EncuestaPlus. Su dedicación a la perfección
                    técnica garantiza una experiencia de usuario sin igual.
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*Servicios*/}
        <section className="bg-slate-700">
          <div className="container mx-auto px-24 py-24">
            <div className="mb-12 flex flex-col items-center justify-center">
              <h3 className="text-3xl">Our Services</h3>
              <div className="w-24 border-b-4 border-yellow-400"></div>
            </div>
            <div className="m-4 flex flex-wrap text-center">
              <div className="w-full p-4 lg:w-1/3">
                <div className="rounded-lg border-2 border-gray-200 px-4 py-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mb-3 inline-block h-20 w-20 text-yellow-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
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
                    className="mb-3 inline-block h-20 w-20 text-yellow-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
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
                    className="mb-3 inline-block h-20 w-20 text-yellow-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
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

        {/*Formulario*/}
        <div className="rounded-lg border-2 border-gray-200 px-4 py-6 ">
          <div className="title-font text-3xl font-medium text-gray-900 max-w-md mx-auto py-8">
            Registrate
          </div>
          <form className="max-w-md mx-auto mb-12  flex-col">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="password"
                name="floating_password"
                id="floating_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Password
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="password"
                name="repeat_password"
                id="floating_repeat_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_repeat_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Confirm password
              </label>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_first_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  First name
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_last_name"
                  id="floating_last_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_last_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Last name
                </label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  name="floating_phone"
                  id="floating_phone"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_phone"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone number (123-456-7890)
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_company"
                  id="floating_company"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_company"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Company (Ex. Google)
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      {/* <div className="bg-gray-800 text-white p-4  bottom-0 w-full z-50 h-48"></div> */}
    </div>
  );
};

export default LandigPage;
