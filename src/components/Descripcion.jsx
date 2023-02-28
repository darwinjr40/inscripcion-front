import React from "react";

export const Descripcion = ({ md = 10, mi = 3, ml = 1 }) => {
  return (
    <>
      <div className="bg-white px-10 py-4  border rounded-xl border-gray-400">
        <div className="flex ">
            <div className="w-1/3 py-3">
              <div className="">
                <label htmlFor="" className="text-gray-800 font-bold text-lg ">DATOS DEL ESTUDIANTE:</label>                
              </div>
              <div className="">
                <label htmlFor="" className="text-black-500 font-bold">Nombre:</label>
                &nbsp;&nbsp;
                <label htmlFor="" className="">DARWIN MAMANI PACO</label>
              </div>
              <div className="">
                <label htmlFor="" className="text-black-500 font-bold">Registro:</label>
                &nbsp;&nbsp;
                <label htmlFor="" className="">218081669</label>
              </div>
              <div className="">
                <label htmlFor="" className="text-black-500 font-bold">Semestre:</label>
                &nbsp;&nbsp;
                <label htmlFor="" className="">1-2023</label>
              </div>
              <div className="">
                <label htmlFor="" className="text-black-500 font-bold">Carrera:</label>
                &nbsp;&nbsp;
                <label htmlFor="" className="">187-3  INGENIERIA INFORMATICA</label>
              </div>
              <div className="">
                <label htmlFor="" className="text-black-500 font-bold">Lugar:</label>
                &nbsp;&nbsp;
                <label htmlFor="" className="">SANTA CRUZ DE LA SIERRA</label>
              </div>
            </div>

            <div className="w-2/3 py-3 font-bold">                
            </div>
            <div className="w-2/3 py-3 font-bold">   
              <div className="">
                <label htmlFor="" className="text-gray-800 font-bold text-lg ">INFORMACION DE MATERIAS:</label>                
              </div>           
              <div className="text-black-500">
                <label htmlFor="">- Materias inscritas : {mi}</label>
              </div>

              <div className=" text-green-500">
                <label htmlFor="">- Materias disponibles : {md}</label>
              </div>


              <div className="text-red-600">
                <label htmlFor="">
                  - Materias disponibles para Levantamiento: {ml}
                </label>
              </div>

              <div className="font-semibold">
                <label htmlFor="">
                  &nbsp;&nbsp;&nbsp;&nbsp; (ppa &gt; 50)  y  (ppa &lt; 60) : &nbsp;&nbsp;&nbsp;&nbsp; Hasta 1 materia
                </label>
                <br />
                <label htmlFor="">
                  &nbsp;&nbsp;&nbsp;&nbsp; ppa &gt;= 60:  &nbsp;&nbsp;&nbsp;&nbsp; Hasta 2 materias
                </label>
              </div>
            </div>
        </div>

      </div>
    </>
  );
};
