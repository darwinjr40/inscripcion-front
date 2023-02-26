import React from "react";
import { Header } from "../components/Header";
import { Schedule } from "../components/Schedule";
import { TableMateria } from "../components/TableMateria";
import { Descripcion, Subject } from "../components";
import DropdownMenu from "../components/DropdownMenu";
import { materias } from "../data/dato";
export const Inscripcion = () => {
  return (
    <div className="w-[100%] m-auto">
      <Header />
      <div className="w-[85%] m-auto">
        {/* <TableMateria />
        <Schedule /> */}

        {/* <Descripcion />
        <Subject /> */}
        {/* <DropdownMenu />
        <DropdownMenu />
        <DropdownMenu /> */}
        {materias.map((materia) => (
          <DropdownMenu key={materia.id} materia={materia} />
        ))}
      </div>
    </div>
  );
};
