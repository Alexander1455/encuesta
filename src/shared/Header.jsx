import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState(false);

  const inputRef = useRef();

  useEffect(() => {
    if (active) {
      inputRef.current.focus();
    }
  }, [active]);

  return (
    <header className="bg-blue-500 text-white px-4 py-4 sticky top-0 overflow-hidden">
      <div
        className={`container header__container mx-auto w-full grid grid-flow-col items-center ${
          active ? "active" : ""
        }`}
      >
        <div className={`overflow-hidden ${active ? "w-0 lg:w-auto" : ""}`}>
          <h2 className="text-xl md:text-2xl lg:text-3xl  font-bold">
            EncuestaPlus
          </h2>
        </div>

        <div className="flex justify-self-end items-center relative w-full">
          <input
            type="text"
            ref={inputRef}
            placeholder="Buscar..."
            className={`rounded py-2 text-black ${
              active
                ? "w-full pr-12 pl-4"
                : "w-0 pr-0 pl-0 lg:w-full lg:pr-12 lg:pl-4"
            }`}
            onBlur={() => setActive(false)}
          />
          <svg
            xmlns="http:www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            onClick={() => setActive(!active)}
            className={`w-6 h-6 absolute right-4 duration-500 ${
              active ? "text-gray-400" : "text-white lg:text-gray-400"
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>

        <div className="hidden lg:inline-block lg:justify-self-end">
          <button className="bg-white text-blue-500 px-4 py-2 rounded duration-300 hover:bg-blue-400 hover:text-white">
            Crear Encuesta
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
