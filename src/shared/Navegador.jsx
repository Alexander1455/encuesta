import { Link } from "react-router-dom"

const Navegador = () => {
    return (
        <section className="grid grid-cols-3">
        <div className="border px-24 py-24 flex flex-col">
            <Link to="#"  className="py-6">
            <div className="border rounded-lg text-xl px-6 py-3">Blackboard</div>
            </Link>
            <Link to="#" className="py-6">
            <div className="border rounded-lg text-xl px-6 py-3">Mis encuestas</div>
            </Link>
            <Link to="#" className="py-6">
            <div className="border rounded-lg text-xl px-6 py-3">Encuestas Participadas</div>
            </Link>
            <Link to="#" className="py-6">
            <div className="border rounded-lg text-xl px-6 py-3">Perfil</div>
            </Link>
        </div>
        </section>
    )
}

export default Navegador