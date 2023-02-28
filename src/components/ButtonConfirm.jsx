import { useState, useContext } from "react";
import { HorarioContext } from "../context/HorarioContext";


export const ButtonConfirm = ({onState}) => {
    const {boletaState, addBoleta, removeBoleta } =   useContext(HorarioContext);

    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleShowConfirmation = () => {
        if (onState.length > 0) {
            window.alert('TIENE MATERIAS CRUZADAS');
            return;
        } 
        
        if (boletaState.length == 0) {
            window.alert('SELECCIONE MATERIAS'); 
            return;
        }

        setShowConfirmation(true);                        
    };

    const handleCancel = () => {
        setShowConfirmation(false);
    };

    const handleConfirm = () => {
        
        boletaState.forEach(mat => {
            mat.confirm = true;
        });
        localStorage.removeItem('estado');        
        localStorage.setItem('boleta', JSON.stringify( boletaState ) );        
        setShowConfirmation(false);
        window.location.reload();            
    };

    return (
        <div>
            <button  onClick={handleShowConfirmation}
                className="fixed  bottom-6 right-4 top-1 mt-28 z-10 w-24 h-24 rounded-l-3xl bg-blue-400 text-black hover:bg-gray-600 font-bold marker:transition duration-300 ease-in-out"
            >
                GRABAR MATERIAS
            </button>

            {showConfirmation && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>

                        <div
                            className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="modal-headline"
                        >
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                        <svg
                                            className="h-6 w-6 text-red-600"
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
                                    </div>

                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3
                                            className="text-lg leading-6 font-medium text-gray-900"
                                            id="modal-headline"
                                        >
                                            ¿Estás seguro?
                                        </h3>

                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                                Esta acción no se puede deshacer.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
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
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
