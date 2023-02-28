import React from "react";
import { Header } from "../components/Header";
import { Schedule } from "../components/Schedule";
import { TableMateria } from "../components/TableMateria";
import { Descripcion, Subject } from "../components";
import DropdownMenu from "../components/DropdownMenu";
import { materias } from "../data/dato";
export const Inscripcion = () => {
  return (
    <div className="w-[100%] m-auto bg-fondo">
      <Header />
      <div className="w-[85%] m-auto pt-10">
        <Descripcion />

        <h1 className="text-2xl black font-semibold mt-5">
          Materias Disponibles
        </h1>
        <div className="flex flex-col space-y-5">
          {materias.map((materia) => (
            <DropdownMenu key={materia.id} materia={materia} />
          ))}
        </div>
        <TableMateria />
        <Schedule />
        <br />
        <br />
        {/* <Subject /> */}
        {/* <DropdownMenu />
        <DropdownMenu />
        <DropdownMenu /> */}
      </div>
    </div>
  );
};
