import React from "react";

export const Header = () => {
  return (
    <div className="flex w-full justify-between py-6 px-3 border border-gray-300 shadow">
      <span className="text-red-600 text-3xl font-semibold">
        UAGRM <span className="text-blue-600">ONLINE</span>
      </span>
      <ul className="text-gray-500 flex justify-between space-x-20 text-base font-medium items-center">
        <li>Histórico</li>
        <li>Semestre 03/2022</li>
        <li>Inscripción</li>
        <li className="text-blue-600">Adición</li>
        <li className="text-black">Andrés Montaño</li>
      </ul>
    </div>
  );
};
