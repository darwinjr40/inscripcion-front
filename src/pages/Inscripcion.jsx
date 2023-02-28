import React from "react";
import { Header } from "../components/Header";
import { Schedule } from "../components/Schedule";
import { TableMateria } from "../components/TableMateria";
import { TableMateriaIntersec } from "../components/TableMateriaIntersec";
import { Descripcion, Subject } from "../components";
import DropdownMenu from "../components/DropdownMenu";
import { materias, boleta } from "../data/dato";


let inser = [];


boleta.forEach((bol) => {
  inser = materias.filter((mat) => (mat.sigla != bol.sigla))
});


export const Inscripcion = () => {
  
  
  return (
    <div className="w-[100%] m-auto">
      <Header />
      <div className="w-[85%] m-auto">
        <Descripcion />
        {/* {materias.map((materia) => (
          <DropdownMenu key={materia.id} materia={materia} />
        ))} */}

        {inser.map((materia) => (
          <DropdownMenu key={materia.id} materia={materia} />
        ))}
        
        <TableMateria />
        <TableMateriaIntersec />
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
