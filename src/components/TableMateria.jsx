import React, { useContext } from "react";
import { HorarioContext } from "../context/HorarioContext";

export const TableMateria = () => {
  const { boletaState, removeHorario, removeBoleta } =
    useContext(HorarioContext);

  const onx = (materia) => {
    // console.log(event);
    // removeHorario(`${materia.sigla}-${isSelect}`); //example: inf110-SA
    // console.log(materia);
    // removeBoleta(materia);
  };

  const onDeleteMat = (mat) => {
    removeBoleta(mat);
    removeHorario(`${mat.sigla}-${mat.grupos[0].grupo}`); //example: inf110-SA
    console.log(mat);
  }
  return (
    <table className="table-auto my-6 border w-full shadow bg-white border-gray-300">
      <thead>
        <tr className="border-b">
          <th>Eliminar</th>
          <th>Sigla</th>
          <th>Grupo</th>
          <th>Materia</th>
          <th>Docente</th>
          <th>Horario</th>
        </tr>
      </thead>
      <tbody>
        {boletaState.map((materia) => (
          <tr className="border-b" key={materia.sigla}>
            <td className="text-center">
              <button className={`${materia.confirm ?  "hidden" : ""}`} onClick={() => onDeleteMat(materia)}   >
                <img
                  src={"src/assets/delete.svg"}
                  alt="delete icon"
                  className="m-auto"
                />
              </button>
            </td>
            <td className="text-center">{materia.sigla}</td>
            <td className="text-center">{materia.grupos[0].grupo}</td>
            <td className="text-center">{materia.materia}</td>
            <td className="text-center">{materia.grupos[0].docente}</td>
            <td className="text-center py-2">
              {materia.grupos[0].horario2.map((hora, i) => (
                <span key={i} className="block">
                  {hora}
                </span>
              ))}
            </td>
          </tr>
        ))}
        {/* {objetos.map((materia) => (
          <tr className="border-b">
            <td className="text-center">
              <button>
                <img
                  src={"src/assets/delete.svg"}
                  alt="delete icon"
                  className="m-auto"
                />
              </button>
            </td>
            <td className="text-center">{materia.sigla}</td>
            <td className="text-center">{materia.grupo}</td>
            <td className="text-center">{materia.materia}</td>
            <td className="text-center">{materia.docente}</td>
            <td className="text-center">
              {materia.horario.map((hora) => (
                <span className="block">{hora}</span>
              ))}
            </td>
          </tr>
        ))} */}
      </tbody>
    </table>
  );
};
