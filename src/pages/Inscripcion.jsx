import React from "react";
import { Header } from "../components/Header";
import { Schedule } from "../components/Schedule";
import { TableMateria } from "../components/TableMateria";

export const Inscripcion = () => {
  return (
    <div className="w-[100%] m-auto">
      <Header />
      <div className="w-[85%] m-auto">
        <TableMateria />
        <Schedule />
      </div>
    </div>
  );
};
