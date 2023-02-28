import { useState, useContext } from "react";
import { HorarioContext } from "../context/HorarioContext";
import { Schedule } from "./Schedule";
import { TableMateria } from "./TableMateria";
import { TableMateriaIntersec } from "./TableMateriaIntersec";


export const ButtonShowBoleta = ({onState, onAdd, onReset}) => {
    const {boletaState, addBoleta, removeBoleta } =   useContext(HorarioContext);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showCuadro, setShowCuadro] = useState(false);

    const handleShowConfirmation = () => {
        setShowConfirmation(true);                        
    };

    const handleCancel = () => {
        setShowConfirmation(false);
    };

    const handleConfirm = () => {
      
        setShowConfirmation(false);
 
    };

    return (
        <div>
            <button  onClick={handleShowConfirmation}
                className="fixed  bottom-6 right-4 top-1 mt-56 z-10 w-24 h-24 rounded-l-3xl bg-yellow-300 text-black hover:bg-gray-600 font-bold transition duration-300 ease-in-out"
            >
                VER BOLETA
            </button>

            {(
                // <div className={`fixed z-10 inset-0 overflow-y-auto ${showConfirmation ? "" : "hidden"}`}>
                <div className={`fixed z-10 inset-0 overflow-y-auto ${showConfirmation ? "" : "hidden"}`}>

                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>

                        <div
                            // className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                            // className="h-screen flex justify-center items-center transform "
                            className="relative  w-[70%] m-auto pt-10"
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="modal-headline"
                        >
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    type="button"
                                    className=" w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={handleCancel}
                                >   
                                    <svg
                                        className="h-6 w-6 text-black"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>                                    
                                </button>
                            </div>

                            {/* <div className="bg-gray-100  px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start"> */}
                            <div className="bg-gray-200  px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="">
                                    <h1 className="text-2xl black font-semibold mt-5">
                                        Materias Seleccionadas
                                    </h1>                                    
                                    <TableMateria />

                                                                      
                                    <TableMateriaIntersec 
                                        onState={onState}
                                        onAdd={onAdd}
                                        onReset={onReset}
                                    />

                                    <div className="bg-gray-400  px-4 pt-5 pb-4 sm:p-6 sm:pb-4">

                                        <input
                                        className="w-5 h-5 mr-2"
                                        type="checkbox"
                                        // id="kraken"
                                        // name={materia.sigla}
                                        // value={grupo.grupo}
                                        onChange={() => (setShowCuadro(!showCuadro))}
                                        // checked={isSelect === grupo.grupo}
                                        />
                                        <label htmlFor="" className="text-2xl black font-semibold mt-5">Ver cuadro de Materias</label>  
                                        
                                        <div className={` z-10 inset-0 overflow-y-auto ${showCuadro ? "" : "hidden"}`}>
                                            {/* <h1 className="text-2xl black font-semibold mt-5">
                                                Cuadro de Materias                                            
                                            </h1>          */}
                                            <Schedule/>       
                                        </div>
                                    
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                {/* <button
                                    type="button"
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={handleCancel}
                                >
                                    cancelar
                                </button>

                                <button
                                    type="button"
                                    className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={handleConfirm}
                                >
                                    Confirmar
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
