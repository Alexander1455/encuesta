import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MuestraEncuesta = () => {
  const [encuestas, setEncuestas] = useState([]);

  useEffect(() => {
    const obtenerEncuestas = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/user/123456/encuestas');
        setEncuestas(response.data);
        console.log(response.data);
        console.log(encuestas);
      } catch (error) {
        console.error('Error al obtener las encuestas:', error);
      }
    };

    obtenerEncuestas();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-300">
      <div className="py-8">
        {encuestas.map((encuesta, index) => (
          <div className='py-8'>
          <div key={index} className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
            <div className="font-bold text-xl mb-2">{encuesta[0]}</div>
            <div className="">
              <div className="border-b-4 border-neutral-950 py-2">
                <h2>Descripción</h2>
              </div>
              <p className="">{encuesta[1]}</p>
              {/* Aquí puedes agregar más elementos de la encuesta si lo necesitas */}
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MuestraEncuesta;


{/* <div className="min-h-screen flex flex-col items-center justify-center bg-gray-300">
<div className="py-8">
<div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
  <h2 className="font-bold text-xl mb-2">Titulo</h2>
  <div className="">
    <div className="border-b-4 border-neutral-950 py-2">
    <h2 className="">Descripcion</h2>
    </div>
    <p className="text-gray-700 text-base py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
  </div>
</div>
</div>

</div> */}