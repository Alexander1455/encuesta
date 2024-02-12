import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Perfil = () => {
  const [usuario, setUsuario] = useState({
    name: '',
    lastname: '',
    age: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    // Aquí puedes hacer una solicitud a tu API para obtener los datos del usuario actual
    // Por simplicidad, aquí se inicializa el estado con algunos datos de ejemplo
    const datosEjemplo = {
      name: 'John',
      lastname: 'Doe',
      age: '30',
      email: 'john.doe@example.com',
      password: '******'
    };
    setUsuario(datosEjemplo);
  }, []);

  const handleChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Aquí puedes hacer una solicitud a tu API para actualizar los datos del usuario
      await axios.put(`http://localhost:5173/usuarios/${usuario.id_usuario}`, usuario); // Cambia la URL según tu API
      alert('Perfil actualizado correctamente');
    } catch (error) {
      console.error('Error al actualizar el perfil:', error);
      alert('Hubo un error al actualizar el perfil. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  return (
    <>
      <link rel="stylesheet" href="https://kit-pro.fontawesome.com/releases/v5.15.1/css/pro.min.css" />
      <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
        <div className="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">Edit Profile</div>
        <div className="mt-10">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mb-6">
              <label className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Name:</label>
              <input type="text" name="name" value={usuario.name} className="text-sm sm:text-base placeholder-gray-500 pl-2 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" onChange={handleChange} />
            </div>
            <div className="flex flex-col mb-6">
              <label className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Last Name:</label>
              <input type="text" name="lastname" value={usuario.lastname} className="text-sm sm:text-base placeholder-gray-500 pl-2 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" onChange={handleChange} />
            </div>
            <div className="flex flex-col mb-6">
              <label className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Age:</label>
              <input type="number" name="age" value={usuario.age} className="text-sm sm:text-base placeholder-gray-500 pl-2 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" onChange={handleChange} />
            </div>
            <div className="flex flex-col mb-6">
              <label className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Email:</label>
              <input type="email" name="email" value={usuario.email} className="text-sm sm:text-base placeholder-gray-500 pl-2 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" onChange={handleChange} />
            </div>
            <div className="flex flex-col mb-6">
              <label className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Password:</label>
              <input type="password" name="password" value={usuario.password} className="text-sm sm:text-base placeholder-gray-500 pl-2 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" onChange={handleChange} />
            </div>
            <div className="flex w-full">
              <button type="submit" className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in">
                <span className="mr-2 uppercase">Save Changes</span>
                <span>
                  <svg className="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </> 
  )
}

export default Perfil;