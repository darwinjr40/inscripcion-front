import React, { useContext, useEffect, useState } from "react";
import { HorarioContext } from "../context/HorarioContext";


const horaDeter = (vec, vecSig ) => {
  for (let i = 0; i < vec.length; i++) {
    const x = vec[i];
    for (let j = 0; j < vecSig.length; j++) {
      const y = vecSig[j];
      if ((x.resource  === y.resource)
          && ((containsEntreRang(x.start, x.end, y.start) || containsEntreRang(x.start, x.end, y.end))
              || (x.start == y.start && x.end === y.end && x.text !==y.text)         
              )          
          ) {
        return true;
      }
    }      
  }
  return false;
}

const containsEntreRang = (horaInicio ,horaFin, horaDeterminada) => {   
  horaInicio = new Date(horaInicio);
  horaFin = new Date(horaFin);
  horaDeterminada = new Date(horaDeterminada);
  // console.log('------------------------------------------');
  // console.log(horaInicio);
  // console.log(horaFin);
  // console.log(horaDeterminada);
  return (horaDeterminada.getTime() > horaInicio.getTime() && horaDeterminada.getTime() < horaFin.getTime());
}


export const TableMateriaIntersec = () => {
  
  const { boletaState, removeHorario, removeBoleta } = useContext(HorarioContext);
  const [materias, setMaterias] = useState([]);
  
  useEffect( () => {
    // console.log('das');
    setMaterias([]);
    const vector = boletaState;
    let n = vector.length;
    for (let i = 0; i < n; i++) {
      const mat = vector[i].grupos[0].horario;
      for (let j = 0; j < n; j++) {     
        const matSig = vector[j].grupos[0].horario;
        // console.log(mat);
        // console.log(matSig);
        if (horaDeter(mat, matSig)) {
          // console.log('chocaron');
          // console.log(vector[i]);
          // console.log(vector[j]);
          setMaterias(
            (m) => [...m, vector[i]]
          );
          break;
        }
      }
    }
    localStorage.setItem('estado', JSON.stringify( boletaState ) );        
  }, [boletaState]);  

  const onx = ( materia) => {
    console.log(materia);
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
        {materias.map((materia) => (
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

      </tbody>
    </table>
  );
};
