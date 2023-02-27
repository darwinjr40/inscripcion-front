import { createContext, useState } from "react";
import { horario } from "../data/dato";

export const HorarioContext = createContext();
export const HorarioProvider = ({ children }) => {
  const [horarioState, setHorarioState] = useState(horario);
  const [materias, setMaterias] = useState([]);

  const addHorario = (horario) => {
    //console.log(horario);
    setHorarioState((horarioState) => [...horarioState, ...horario]);
  };

  const removeHorario = (id) => {
    console.log(id);
    setHorarioState(
      horarioState.filter((hora) => {
        if (hora.text === id) return null;
        return hora;
      })
    );
  };

  return (
    <HorarioContext.Provider
      value={{ horarioState, setHorarioState, addHorario, removeHorario }}
    >
      {children}
    </HorarioContext.Provider>
  );
};
