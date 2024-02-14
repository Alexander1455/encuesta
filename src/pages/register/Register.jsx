import axios from "axios";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const hola = async (data) => {
    const user = { id_usuario: parseInt(data.id_usuario), name:data.Name, lastname:data.LastName, age:data.age, email:data.email, password:data.password };
    const res = await axios.post("http://127.0.0.1:8000/api/insert", user);
    console.log(res);
    console.log(user)
  };
  console.log(errors);
  return (
    <>
      <link
        rel="stylesheet"
        href="https://kit-pro.fontawesome.com/releases/v5.15.1/css/pro.min.css"
      />

      <div class="min-h-screen flex flex-col items-center justify-center bg-gray-300">
        <div class="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
          <div class="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">
            Register
          </div>

          <div class="mt-10">
            <form onSubmit={handleSubmit(hola)}>
              <div class="flex flex-col mb-6">
                <label class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
                  ID-Usuario:
                </label>
                <div class="relative">
                  <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
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
                        d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="id_usuario"
                    class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                    placeholder="ID USUARIO"
                    {...register("id_usuario", { required: "es requerido <3" })}
                  />
                  {errors.id_usario && (
                    <p className="text-red-500 absolute text-sm">
                      {errors?.id_usario?.message}
                    </p>
                  )}
                </div>
              </div>

              <div class="flex flex-col mb-6">
                <label class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
                  Name:
                </label>
                <div class="relative">
                  <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    <span>
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
                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                        />
                      </svg>
                    </span>
                  </div>
                  <input
                    type="text"
                    name="name"
                    class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                    placeholder="Name"
                    {...register("Name", {
                      required: "es requerido n.n",
                      pattern: {
                        message: "No puedes usar numeros",
                        value: /^[^\d\s]+(?:\s[^\d\s]+)?$/,
                      },
                    })}
                  />
                  {errors.Name && (
                    <p className="text-red-500 absolute text-sm">
                      {errors?.Name?.message}
                    </p>
                  )}
                </div>
              </div>

              <div class="flex flex-col mb-6">
                <label class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
                  Last Name:
                </label>
                <div class="relative">
                  <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    <span>
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
                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                        />
                      </svg>
                    </span>
                  </div>
                  <input
                    type="text"
                    name="lastname"
                    class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                    placeholder="Last Name"
                    {...register("LastName", {
                      required: "es requerido n.n",
                      pattern: {
                        message: "No puedes usar numeros",
                        value: /^[^\d\s]+(?:\s[^\d\s]+)?$/,
                      },
                    })}
                  />
                  {errors.LastName && (
                    <p className="text-red-500 absolute text-sm">
                      {errors?.LastName?.message}
                    </p>
                  )}
                </div>
              </div>

              <div class="flex flex-col mb-6">
                <label class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
                  Age:
                </label>
                <div class="relative">
                  <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    <span>
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
                          d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5"
                        />
                      </svg>
                    </span>
                  </div>
                  <input
                    type="number"
                    name="age"
                    class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                    placeholder="Age"
                    {...register("age", {
                      required: "Es necesario",
                      max: {
                        message: "No puedes tener mas de tres digitos",
                        value: 120,
                      },
                    })}
                  />
                  {errors.age && (
                    <p className="text-red-500 absolute text-sm">
                      {errors?.age?.message}
                    </p>
                  )}
                </div>
              </div>

              <div class="flex flex-col mb-6">
                <label class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
                  Email:
                </label>
                <div class="relative">
                  <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    <svg
                      class="h-6 w-6"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    name="email"
                    class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                    placeholder="Email"
                    {...register("email", {
                      required: "El correo es requerido",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                        message: "El correo no es valido",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500 absolute text-sm">
                      {errors?.email?.message}
                    </p>
                  )}
                </div>
              </div>

              <div class="flex flex-col mb-6">
                <label class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
                  Password:
                </label>
                <div class="relative">
                  <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    <span>
                      <svg
                        class="h-6 w-6"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </span>
                  </div>
                  <input
                    type="password"
                    name="password"
                    class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                    placeholder="Password"
                    {...register("password", {
                      required: "El password es requerido",
                      minLength: {
                        value: 8,
                        message: "El password debe tener al menos 8 digitos",
                      },
                    })}
                  />
                  {errors.password && (
                    <p className="text-red-500 absolute text-sm">
                      {errors?.password?.message}
                    </p>
                  )}
                </div>
              </div>

              <div class="flex w-full">
                <button
                  type="submit"
                  class="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
                >
                  <span class="mr-2 uppercase">Register</span>
                  <span>
                    <svg
                      class="h-6 w-6"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
