import { createContext, useState } from "react";
import { horario } from "../data/dato";

export const HorarioContext = createContext();
export const HorarioProvider = ({ children }) => {
  const [horarioState, setHorarioState] = useState(horario);

  const addHorario = (horario) => {
    setHorarioState((horarioState) => ({
      ...horarioState,
      horario,
    }));
  };

  return (
    <HorarioContext.Provider
      value={{ horarioState, setHorarioState, addHorario }}
    >
      {children}
    </HorarioContext.Provider>
  );
};
