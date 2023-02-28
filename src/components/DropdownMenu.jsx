import React, { useContext, useState } from "react";
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
    <div className="relative border border-gray-400 rounded-lg py-0 shadow-sm">
      <button
        className={`py-2 w-full rounded-t-lg`}
        style={{ backgroundColor: `#${materia.color}` }}
        onClick={toggleDropdown}
      >
        <div>
          <div className="flex text-center">
            <div className="w-1/6 py-3">
              <div>
                <b>Nivel</b>
              </div>
              <div>{materia.nivel}</div>
            </div>

            <div className="w-1/6 py-3">
              <div>
                <b>Sigla</b>
              </div>
              <div>{materia.sigla}</div>
            </div>

            <div className="w-1/6 py-3">
              <div>
                <b>Nombre Materia</b>
              </div>
              <div>{materia.materia}</div>
            </div>

            <div className="w-1/6 py-3">
              <div>
                <b>Grupos Habilitados</b>
              </div>
              <div>{materia.cantidadGrupos}</div>
            </div>

            <div className="w-2/6 py-3">
              <div>
                <b>Horario</b>
              </div>
              <div></div>
            </div>

            <svg
              className={`absolute right-0 top-5 mx-auto w-10 ${
                isOpen ? "rotate-180" : ""
              }`}
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

      <div
        className={`flex flex-col space-y-0 bg-white ${isOpen ? "" : "hidden"}`}
      >
        {materia.grupos.map((grupo) => (
          <div
            key={grupo.id}
            className={`border-b border-gray-400 min-h-[50px]`}
          >
            <ul className="bg-white w-full">
              <li className="hover:bg-gray-100 flex text-center">
                <div className="w-1/6 m-auto flex items-center justify-center py-2">
                  <input
                    className=""
                    type="radio"
                    id="kraken"
                    name={materia.sigla}
                    value={grupo.grupo}
                    onChange={(e) => onInputChange(e, materia, grupo)}
                    checked={isSelect === grupo.grupo}
                  />
                </div>
                <label
                  className="w-1/6 flex items-center justify-center py-2"
                  htmlFor="kraken"
                >
                  {grupo.grupo}
                </label>
                <label
                  className="w-1/6 flex items-center justify-center px-1 py-2"
                  htmlFor="kraken"
                >
                  {grupo.docente}
                </label>
                <label
                  className="w-1/6 flex items-center justify-center py-2 "
                  htmlFor="kraken"
                >
                  {grupo.cuposDisponibles}
                </label>
                <label
                  className="w-2/6 flex flex-col items-center justify-center py-2"
                  htmlFor="kraken"
                >
                  {grupo.horario2.map((hora) => (
                    <p key={hora} className="font-normal">
                      {hora}
                    </p>
                  ))}
                </label>
              </li>
            </ul>
          </div>
        ))}
        <button
          className="text-red-500 font-semibold py-2"
          onClick={() => {
            onClickRemoveSelected(materia);
          }}
        >
          QUITAR SELECCIÓN
        </button>
      </div>
    </div>
  );
}

export default DropdownMenu;
