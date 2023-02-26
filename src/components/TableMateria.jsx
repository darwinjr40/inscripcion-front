import React from "react";

export const TableMateria = () => {
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
      id: 1,
      sigla: "INF110",
      grupo: "SA",
      materia: "arquitectura de software",
      docente: "López Winnipeg Mario Milton",
      horario: ["Lun 07:00 - 08:30", "Lun 07:00 - 08:30", "Lun 07:00 - 08:30"],
    },
  ];
  return (
    <table className="table-auto my-6 border w-full shadow">
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
        {objetos.map((materia) => (
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
        ))}
      </tbody>
    </table>
  );
};
