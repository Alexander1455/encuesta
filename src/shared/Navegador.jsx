import { Link } from "react-router-dom";

const Navegador = () => {
  return (
    <aside className="flex flex-col   justify-center bg-gray-300 border">
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-12 flex flex-col">
        <Link to="/pages/MuestraEncuesta" className="py-4">
          <div className="bg-[#3a79c0] border rounded-lg text-xl px-6 py-3">
            Mis encuestas
          </div>
        </Link>
        <Link to="/pages/MuestraEncuesta" className="py-4">
          <div className="bg-[#3a79c0] border rounded-lg text-xl px-6 py-3">
            Encuestas Participadas
          </div>
        </Link>
        <Link to="pages/Perfil" className="py-4">
          <div className="bg-[#3a79c0] border rounded-lg text-xl px-6 py-3">Perfil</div>
        </Link>
      </div>
    </aside>
  );
};

export default Navegador;
