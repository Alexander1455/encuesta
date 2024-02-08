const NuevaEncuesta = () => {
  return (
    <div className="px-96 py-24 flex flex-col">
        <div className="border-2 py-6 rounded-lg ">
            <h2 className="flex justify-center">Agregar Titulo</h2>
        </div>
        <div className="border-2 py-6 rounded-lg ">
            <h2 className="flex justify-center">Agregar Descripcion</h2>
        </div>
        <div className="border-2 py-6 rounded-lg ">
            <div className="border-2 py-6  rounded-lg ">
            <h2 className="flex justify-center">Agregar Pregunta</h2>
            </div>
            <section className="flex flex-col-2 justify-center">
            <div className="border-2 py-6 rounded-lg ">
                <li>Opcion 1</li>
                <li>Opcion 2</li>
                <li>Opcion 3</li>
                <li>Opcion 4</li>
            </div>
            <div>
                Icono de eliminar y obligatorio
            </div>
            </section>
        </div>
    </div>
  )
}

export default NuevaEncuesta
