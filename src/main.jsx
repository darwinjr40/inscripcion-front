import React from "react";
import ReactDOM from "react-dom/client";
import { Schedule } from "./components/Schedule";
import { HorarioProvider } from "./context/HorarioContext";
import "./index.css";
import { Inscripcion } from "./pages/Inscripcion";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <HorarioProvider>
      <Inscripcion />
    </HorarioProvider>
  // </React.StrictMode>
);
