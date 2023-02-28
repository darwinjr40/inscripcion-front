import React, { useContext, useState, useEffect } from "react";
import { HorarioContext } from "../context/HorarioContext";

function DropdownMenu({ materia }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelect, setIsSelect] = useState("");
  const { addHorario, removeHorario, boletaState, addBoleta, removeBoleta } =
    useContext(HorarioContext);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const onInputChange = (event, mat, grupo) => {
    //console.log(materia);
    //console.log(grupo);
    //console.log(grupo.horario);
    onClickRemoveSelected(mat);
    setIsSelect(event.target.value);
    addHorario(grupo.horario);

    let materiaCopy = { ...mat };
    materiaCopy.grupos = [grupo];
    addBoleta(materiaCopy);
  };

  const onClickRemoveSelected = (mat) => {
    if (isSelect === "") return;
    removeHorario(`${mat.sigla}-${isSelect}`); //example: inf110-SA
    removeBoleta(mat);
    setIsSelect("");
  };

  return (
    <div className="relative border-black">
      <button
        className="py-2 px-4  bg-yellow-500 rounded-md w-full"
        onClick={toggleDropdown}
      >
        <div>
          <div className="flex text-center">
            <div className="w-1/4 bg-gray-500 py-3">
              <div>
                <b>Nivel</b>
              </div>
              <div>{materia.nivel}</div>
            </div>

            <div className="w-1/4 bg-gray-400 py-3">
              <div>
                <b>Sigla</b>
              </div>
              <div>{materia.sigla}</div>
            </div>

            <div className="w-1/4 bg-gray-500 py-3">
              <div>
                <b>Nombre Materia</b>
              </div>
              <div>{materia.materia}</div>
            </div>

            <div className="w-1/4 bg-gray-400 py-3">
              <div>
                <b>Grupos Habilitados</b>
              </div>
              <div>{materia.cantidadGrupos}</div>
            </div>

            <svg
              className={`-mr-1 ml-2 w-12 ${isOpen ? "rotate-180" : ""}`}
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
      <button
        onClick={() => {
          onClickRemoveSelected(materia);
        }}
      >
        QUITAR SELECCIÓN
      </button>
      <div className="flex flex-col space-y-4">
        {materia.grupos.map((grupo) => (
          <div
            key={grupo.id}
            className={` hover:bg-gray-100 ${isOpen ? "" : "hidden"}`}
          >
            <ul className="bg-white shadow-md rounded-md w-full ">
              <li className="hover:bg-gray-100 flex text-center min-h-[50px]">
                <input
                  className="w-1/6 bg-gray-500 h-6 m-auto"
                  type="radio"
                  id="kraken"
                  name={materia.sigla}
                  value={grupo.grupo}
                  onChange={(e) => onInputChange(e, materia, grupo)}
                  checked={isSelect === grupo.grupo}
                />
                <label
                  className="w-1/6 bg-gray-400 flex items-center justify-center "
                  htmlFor="kraken"
                >
                  {grupo.grupo}
                </label>
                <label
                  className="w-1/6 bg-gray-500 flex items-center justify-center"
                  htmlFor="kraken"
                >
                  {grupo.docente}
                </label>
                <label
                  className="w-1/6 bg-gray-400 flex items-center justify-center"
                  htmlFor="kraken"
                >
                  {grupo.cuposDisponibles}
                </label>
                <label
                  className="w-2/6 bg-gray-500 flex flex-col items-center justify-center"
                  htmlFor="kraken"
                >
                  {grupo.horario2.map((hora) => (
                    <p key={hora}>{hora}</p>
                  ))}
                </label>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DropdownMenu;
