import React, { useContext } from "react";
import { HorarioContext } from "../context/HorarioContext";
import { DayPilot, DayPilotCalendar } from "@daypilot/daypilot-lite-react";

export const Schedule = () => {
  //console.log("horariooooo");
  const { horarioState } = useContext(HorarioContext);

  return (
    <div>
      <button
        onClick={() => {
          prueba();
        }}
      >
        button
      </button>
      <DayPilotCalendar
        viewType="Resources"
        cellDuration={15}
        durationBarVisible
        startDate="2023-02-25"
        businessBeginsHour={7}
        columns={[
          { name: "Lunes", id: "1" },
          { name: "Martes", id: "2" },
          { name: "Miercoles", id: "3" },
          { name: "Jueves", id: "4" },
          { name: "Viernes", id: "5" },
        ]}
        events={horarioState}
      />
    </div>
  );
};
