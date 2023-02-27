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
        startDate="2023-02-25"
        viewType="Resources"
        columns={[
          { name: "Lunes", id: "1" },
          { name: "Martes", id: "2" },
          { name: "Miercoles", id: "3" },
          { name: "Jueves", id: "4" },
          { name: "Viernes", id: "5" },
        ]}
        events={horarioState}
        /* events={[
          {
            id: 1,
            text: "Event 1",
            start: "2023-02-25T10:30:00",
            end: "2023-02-25T13:00:00",
            resource: "1",
          },
          {
            id: 1,
            text: "Event 1",
            start: "2023-02-25T07:00:00",
            end: "2023-02-25T09:15:00",
            resource: "1",
          },
        ]} */
      />
    </div>
  );
};
