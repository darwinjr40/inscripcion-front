import React, { useContext } from "react";
import { HorarioContext } from "../context/HorarioContext";

export const TableMateria = () => {
  
  const { boletaState, removeHorario, removeBoleta } = useContext(HorarioContext);
  
  const objetos = [
    {
      id: 1,
      sigla: "INF110",
      grupo: "SA",
      materia: "arquitectura de software",
      docente: "López Winnipeg Mario Milton",
      horario: ["Lun 07:00 - 08:30", "Lun 07:00 - 08:30", "Lun 07:00 - 08:30"],
    },
    {
      id: 2,
      sigla: "INF110",
      grupo: "SA",
      materia: "arquitectura de software",
      docente: "López Winnipeg Mario Milton",
      horario: ["Lun 07:00 - 08:30", "Lun 07:00 - 08:30", "Lun 07:00 - 08:30"],
    },
  ];

  const onx = ( materia) => {
    // console.log(event);
    // removeHorario(`${materia.sigla}-${isSelect}`); //example: inf110-SA
    console.log(materia);
    // removeBoleta(materia);
  };
  return (
    <table className="table-auto my-6 border w-full shadow" >
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
      <tbody >          
        {boletaState.map((materia) => (
          <tr  className="border-b" key={materia.sigla}>
            <td className="text-center">
              <button
                onClick={() => onx(materia)}
              >
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
            <td className="text-center">
                {
                  materia.grupos[0].horario2.map(
                    (hora, i) => ( 
                      <span 
                        key={i} 
                        className="block"
                      >
                        {hora}
                      </span>
                    )
                  )
                }
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
