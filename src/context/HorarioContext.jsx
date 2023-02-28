import { createContext, useState } from "react";
import { horario, boleta } from "../data/dato";



export const init = () => {
  return JSON.parse(localStorage.getItem('estado')) || JSON.parse(localStorage.getItem('boleta')) || [];
}
export const initHorario = () => {
  let materias = JSON.parse(localStorage.getItem('estado')) || JSON.parse(localStorage.getItem('boleta')) || [];
  if (materias.length == 0) {
    return materias;
  }else {
    let m = [];
    materias.forEach(mat => {
      // console.log(mat.grupos[0].horario);
      mat.grupos[0].horario.forEach(e => {
        m.push(e)
      });
    });
    return m;
  }
}

export const HorarioContext = createContext();

export const HorarioProvider = ({ children }) => {
  const [horarioState, setHorarioState] = useState(initHorario);
  const [boletaState, setBoletaState] = useState(init);

  const addHorario = (horario) => {
    setHorarioState((horarioState) => [...horarioState, ...horario]);
  };
  
  
  const removeHorario = (id) => {
    setHorarioState(
      horarioState.filter((hora) => (hora.text !== id))
    );
  };
  
  //*Materias  
  
  const addBoleta = (materia) => {
    // removeBoleta(materia);
    setBoletaState(
      (materiaState) => [...materiaState, materia ]
    );                
  };

  const removeBoleta = (materia) => {
    setBoletaState(
      boletaState.filter((mat) => (mat.sigla !== materia.sigla))
    );
  };
  
  return (
    <HorarioContext.Provider
      value={{ horarioState, setHorarioState, addHorario, removeHorario,
        boletaState,
        setBoletaState,
        addBoleta,
        removeBoleta,
       }}
    >
      {children}
    </HorarioContext.Provider>
  );
};
