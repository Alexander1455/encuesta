const Header = () => {
    return (
      <header className="bg-blue-500 text-white p-4 py-12">
        <div className="container mx-auto flex items-center justify-between">
          {/* Título de la aplicación */}
          <div className="text-5xl font-bold">EncuestaPlus</div>
  
          {/* Barra de búsqueda */}
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Buscar..."
              className="border p-2 px-12 rounded"
            />
            <button className="bg-white text-blue-500 p-2 rounded">
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="currentColor" 
            class="w-6 h-6"
            >
            <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" 
            />
</svg>

            </button>
          </div>
  
          {/* Botones "Responder Encuesta", "Nueva Encuesta" y "Acceder" */}
          <div className="flex items-center space-x-4">
            <button className="bg-white text-blue-500 px-4 py-2 rounded text-2xl">
              Responder Encuesta
            </button>
            <button className="bg-white text-blue-500 px-4 py-2 rounded text-2xl">
              Nueva Encuesta
            </button>
            <button className="bg-white text-blue-500 px-4 py-2 rounded text-2xl">
              Acceder
            </button>
          </div>
        </div>
      </header>
    );
  };
  
  export default Header