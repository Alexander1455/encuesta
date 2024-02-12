import { Link } from "react-router-dom";

const Navegador = () => {
  return (
    <aside className="h-full border">
      <div className="px-24 py-24 flex flex-col">
        <Link to="#" className="py-6">
          <div className="border rounded-lg text-xl px-6 py-3">Blackboard</div>
        </Link>
        <Link to="#" className="py-6">
          <div className="border rounded-lg text-xl px-6 py-3">
            Mis encuestas
          </div>
        </Link>
        <Link to="#" className="py-6">
          <div className="border rounded-lg text-xl px-6 py-3">
            Encuestas Participadas
          </div>
        </Link>
        <Link to="#" className="py-6">
          <div className="border rounded-lg text-xl px-6 py-3">Perfil</div>
        </Link>
      </div>
    </aside>
  );
};

export default Navegador;
