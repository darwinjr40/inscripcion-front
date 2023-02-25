import React from "react";

export const Descripcion = ({md = 10, mi = 3, ml = 1}) => {
  return (
    <>    
      <div className="bg-gray-200 h-48 p-10">
        <div className="text-black-500">
          <label htmlFor="">Materias disponibles  : {md}</label>
        </div>
        
        <div className="text-green-600">
          <label htmlFor="">Materias inscritas : {mi}</label>
        </div>

        <div className="text-red-600">
          <label htmlFor="">Materias disponibles para Levantamiento: {ml}</label>
        </div>

        <div className="">
          <label htmlFor="">&nbsp;&nbsp;&nbsp;&nbsp; ppa &gt; 60:       1 materia</label>
          <br />
          <label htmlFor="">&nbsp;&nbsp;&nbsp;&nbsp; ppa &gt; 70:       2 materia</label>          
        </div>
      </div>
    </>
  );
};
