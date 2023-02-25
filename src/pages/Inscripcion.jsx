import React from "react";
// import { Descripcion } from '../components/Descripcion';
import { Descripcion, Subject } from '../components';
import DropdownMenu1 from "../components/DropdownMenu1";

export const Inscripcion = () => {
  return (
    <>
      <Descripcion />
      <Subject />
      <DropdownMenu1 />

      
      <div className="border text-2xl text-red-500">
        Hola papu página de inscripción
      </div>
    </>
  );
};
