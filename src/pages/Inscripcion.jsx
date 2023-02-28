import React from "react";
import { Header } from "../components/Header";
import { Schedule } from "../components/Schedule";
import { TableMateria } from "../components/TableMateria";
import { TableMateriaIntersec } from "../components/TableMateriaIntersec";
import { Descripcion, Subject } from "../components";
import DropdownMenu from "../components/DropdownMenu";
import { materias, boleta } from "../data/dato";
import {ButtonConfirm} from "../components/ButtonConfirm";
import { init } from "../context/HorarioContext";


let inser = init();

// console.log(inser);

if (inser.length == 0) {
  inser = materias;
} else {
  // inser = materias.filter((mat) => 
  //   !(inser.find(bol => (bol.sigla === mat.sigla && bol.confirm)))
  // )
  let vec = [];
  materias.forEach((mat) => {
      const eleBusq = (inser.find(bol => (bol.sigla === mat.sigla)));
      if (eleBusq) {
        if (!eleBusq.confirm) {
          mat.selectGrupo = eleBusq.grupos[0].grupo;
          vec.push(mat)
        }
      } else {
        vec.push(mat)
      }
    }
  )
  inser = vec;
  console.log(inser);

}


export const Inscripcion = () => {
  return (
    <div className="w-[100%] m-auto bg-fondo">
      <Header />
      <div className="w-[80%] m-auto pt-10">
        <Descripcion />

        <h1 className="text-2xl black font-semibold mt-5">
          Materias Disponibles
        </h1>
        <div className="flex flex-col space-y-5">
          {inser.map((materia) => (
            <DropdownMenu key={materia.id} materia={materia} />
          ))}
        </div>
        <TableMateria />
        <TableMateriaIntersec />
        <Schedule />

        <ButtonConfirm/>
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
