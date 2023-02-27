import { createContext, useState } from "react";
import { horario } from "../data/dato";

export const HorarioContext = createContext();

export const HorarioProvider = ({ children }) => {
  const [horarioState, setHorarioState] = useState(horario);
  const [boletaState, setBoletaState] = useState([]);

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
