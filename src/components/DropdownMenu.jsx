import React, { useState } from "react";

function DropdownMenu({ materia }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const onInputChange  = (event) => {
    console.log(JSON.parse(event.target.value) || null);
  }

  return (
    <div className="relative">
      <button
        className="py-2 px-4  bg-yellow-500 rounded-md w-full"
        onClick={toggleDropdown}
      >
        <div>
          <div className="flex text-center">
            <div className="w-1/5 bg-gray-500 h-16 py-3">
              <div>
                <b>Nivel</b>
              </div>
              <div>{materia.nivel}</div>
            </div>

            <div className="w-1/5 bg-gray-400 h-16 py-3">
              <div>
                <b>Sigla</b>
              </div>
              <div>{materia.sigla}</div>
            </div>

            <div className="w-1/5 bg-gray-500 h-20 py-3">
              <div>
                <b>Nombre Materia</b>
              </div>
              <div>{materia.materia}</div>
            </div>

            <div className="w-1/5 bg-gray-400 h-16 py-3">
              <div>
                <b>Grupos Habilitados</b>
              </div>
              <div>{materia.cantidadGrupos}</div>
            </div>

            <svg
              className="-mr-1 ml-2 h-8 w-12"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </button>

      {materia.grupos.map((grupo) => (
        <div
          key={grupo.id}
          className={`py-2 px-4 hover:bg-gray-100 ${isOpen ? "": "hidden" }`}
        >
          <ul className="static top-full left-0 bg-white shadow-md rounded-md w-full">
            <li className="py-2 px-4 hover:bg-gray-100">
              <div className="flex mb-4 text-center ">
                <input
                  className="w-1/5 bg-gray-500 h-6 py-3"
                  type="radio"
                  id="kraken"
                  name={materia.sigla}
                  value={JSON.stringify(materia)} 
                  onChange={ onInputChange  }
                />
                <label className="w-1/5 bg-gray-400 h-12 py-3" htmlFor="kraken">
                  {grupo.grupo}
                </label>
                <label className="w-1/5 bg-gray-500 h-12 py-3" htmlFor="kraken">
                  {grupo.docente}
                </label>
                <label className="w-1/5 bg-gray-400 h-12 py-3" htmlFor="kraken">
                  {grupo.cuposDisponibles}
                </label>
                <label className="w-1/5 bg-gray-500 h-12 py-3" htmlFor="kraken">
                  {grupo.horario2.map((hora) => (
                    <p key={hora}>{hora}</p>
                  ))}
                </label>
              </div>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default DropdownMenu;
