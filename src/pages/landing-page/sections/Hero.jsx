const Hero = () => {
  return (
    <section className="bg-[#3a79c0] py-12 text-white">
      <div className="container px-4 md:px-2 xl:px-0 mx-auto grid grid-cols-1 2xl:grid-cols-2 gap-12">
        <div className="space-y-5 flex flex-col items-start justify-center">
          <h1 className="font-bold text-6xl">EncuestaPlus</h1>
          <p className="md:text-xl font-semibold text-lg md:text-start text-center leading-normal md:leading">
            En EncuestaPlus, creemos en la importancia de dar voz a todos. Ya
            sea que estés buscando entender mejor a tu audiencia o simplemente
            quieras compartir tus pensamientos de manera anónima, hemos creado
            la plataforma perfecta para ti. Descubre el poder de tus opiniones
            con EncuestaPlus.
          </p>
          <button className="border rounded-md mx-auto md:mx-0 px-4 py-2 hover:bg-white transition-colors hover:text-[#3a79c0]">
            Registrate
          </button>
        </div>
        <div>
          <img src="/hero_image.svg" alt="" className="w-10/12 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

/*
<section className="grid grid-cols-1 2xl:grid-cols-2 bg-[#3a79c0] items-center">
      <div className="">
        <div className="w-full">
          <h1 className="  font-medium text-white ">EncuestaPlus</h1>
          <p className="text-2xl text-pretty">
            En EncuestaPlus, creemos en la importancia de dar voz a todos. Ya
            sea que estés buscando entender mejor a tu audiencia o simplemente
            quieras compartir tus pensamientos de manera anónima, hemos creado
            la plataforma perfecta para ti. Descubre el poder de tus opiniones
            con EncuestaPlus.
          </p>
          <button className="border rounded-lg text-xl px-6 py-3">
            Registrate
          </button>
        </div>
      </div>

      <div className="items-center flex justify-center">
        <div className="">
           <img src="./src/images/logo.webp" className="" /> 
          </div>
          </div>
        </section>*/
