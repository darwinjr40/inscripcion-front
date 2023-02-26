import { createContext, useState } from "react";
import { horario } from "../data/dato";

export const HorarioContext = createContext();
export const HorarioProvider = ({ children }) => {
  const [horarioState, setHorarioState] = useState(horario);
  const prueba = () => {
    console.log("prueba del context");
  };

  return (
    <HorarioContext.Provider value={{ horarioState, setHorarioState, prueba }}>
      {children}
    </HorarioContext.Provider>
  );
};
