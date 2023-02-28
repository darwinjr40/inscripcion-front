import React, { useContext, useEffect, useState } from "react";
import { HorarioContext } from "../context/HorarioContext";


const horaDeter = (vec, vecSig ) => {//inf110, inf210
  for (let i = 0; i < vec.length; i++) {
    const x = vec[i];
    for (let j = 0; j < vecSig.length; j++) {
      const y = vecSig[j];
      // if ((x.resource  === y.resource)
      //     && ((containsEntreRang(x.start, x.end, y.start) || containsEntreRang(x.start, x.end, y.end))
      //         || (x.start == y.start && x.end === y.end && x.text !==y.text)         
      //         )          
      //     ) {
        // containsInsersec(x.start, x.end, y.start, y.end);
      if ((x.resource  === y.resource)
          && (
              (containsEntreRang(x.start, x.end, y.start) || containsEntreRang(x.start, x.end, y.end))
              || (x.fin === y.fin && x.start === y.start)        
              )
          && (x.text !==y.text)
          // &&                
          ) {
        return true;
      }
    }      
  }
  return false;
}

// const containsInsersec = (ha ,hb, ia ,ib) => {   
//   ha = (new Date(ha)).getTime();
//   hb = (new Date(hb)).getTime();
//   ia = (new Date(ia)).getTime();
//   ib = (new Date(ib)).getTime();

//   return (());
//   // console.log('------------------------------------------');
//   // console.log(ha);
//   // console.log(hb);
//   // console.log(horaDeterminada);
// }

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


export const TableMateriaIntersec = ({onState, onAdd, onReset}) => {
  
  const { boletaState, removeHorario, removeBoleta } = useContext(HorarioContext);
  const [showTable, setShowTable] = useState(false);
  
  useEffect( () => {
    onReset()
    const vector = boletaState;
    let n = vector.length;
    let sw = false;
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
          sw = true;
          onAdd(vector[i]);
          break;
        }
      }
    }
    setShowTable(sw);
    localStorage.setItem('estado', JSON.stringify( boletaState ) );
  }, [boletaState]);  

  const onx = ( materia) => {
    console.log(materia);
  };
  return (
    // <button className={``} onClick={() => onDeleteMat(materia)}   >
    <>
      { showTable ? 
          <h1 className="text-2xl black font-semibold my-5">Hay Choque de Materias</h1>            
          :
          <h1 className="text-2xl black font-semibold my-5">No Hay conflictos</h1>            
      }
    <div className={`${showTable ?  '' : 'hidden'}`}>
      <table className={`table-auto my-6 border w-full shadow bg-white border-gray-300`}>
        <thead>
          <tr className="border-b">
            {/* <th>Eliminar</th> */}
            <th>Sigla</th>
            <th>Grupo</th>
            <th>Materia</th>
            <th>Docente</th>
            <th>Horario</th>
          </tr>
        </thead>
        <tbody >          
          {onState.map((materia) => (
            <tr  className="border-b" key={materia.sigla}>
              {/* <td className="text-center">
                <button
                  onClick={() => onx(materia)}
                >
                  <img
                    src={"src/assets/delete.svg"}
                    alt="delete icon"
                    className="m-auto"
                  />
                </button>
              </td> */}
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
    </div>
    </>
  );
};
