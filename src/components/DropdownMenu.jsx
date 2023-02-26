import React, { useState } from 'react';

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    // <div className="relative">
    <div className="relative">
      <button className="py-2 px-4  bg-yellow-500 rounded-md w-full"
        onClick={toggleDropdown}
      >
            <div>

              <div className="flex text-center" >
                
                <div className="w-1/5 bg-gray-500 h-16 py-3">
                  <div><b>Nivel</b></div>
                  <div>1</div>
                </div>
                
                <div className="w-1/5 bg-gray-400 h-16 py-3">
                  <div><b>Sigla</b></div>
                  <div>INF110</div>
                </div>
                
                <div className="w-1/5 bg-gray-500 h-20 py-3">
                  <div><b>Nombre Materia</b></div>
                  <div>Introduccion a la informatica</div>                  
                </div>
                
                <div className="w-1/5 bg-gray-400 h-16 py-3">                  
                  <div><b>Grupos Habilitados</b></div>
                  <div>3</div>
                </div>

                <div className="w-1/5 bg-gray-500 h-16 py-3">                  
                  <div><b>Cupos Disponibles</b></div>
                  <div>30</div>
                </div>

                <svg className="-mr-1 ml-2 h-8 w-12" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>

              </div>

            </div>

      </button>
      
      
      {/* {( isOpen &&
        <div className="py-2 px-4 hover:bg-gray-100"> */}
      {(
        <div className={`py-2 px-4 hover:bg-gray-100 ${isOpen?  'hidden': ''}`} >
          <ul className="static top-full left-0 bg-white shadow-md rounded-md w-full">



            <li className="py-2 px-4 hover:bg-gray-100">
              <div className="flex mb-4 text-center " >
                <input className="w-1/5 bg-gray-500 h-6 py-3" type="radio" id="kraken" name="monster" value="K"/>
                <label className="w-1/5 bg-gray-400 h-12 py-3" htmlFor="kraken">Grupo SA</label> 
                <label className="w-1/5 bg-gray-500 h-12 py-3" htmlFor="kraken">Peinado Pereira Miguel Jesus</label>
                <label className="w-1/5 bg-gray-400 h-12 py-3" htmlFor="kraken">20 cupos Disponibles</label>
                <label className="w-1/5 bg-gray-500 h-12 py-3" htmlFor="kraken">Lun 07:00 - 08:30</label>
              </div>
            </li>

            <li className="py-2 px-4 hover:bg-gray-100">
              <div className="flex mb-4 text-center " >
                <input className="w-1/5 bg-gray-500 h-8 py-3" type="radio" id="kraken" name="monster" value="K"/>
                <label className="w-1/5 bg-gray-400 h-12 py-3" htmlFor="kraken">Grupo SA</label> 
                <label className="w-1/5 bg-gray-500 h-12 py-3" htmlFor="kraken">Peinado Pereira Miguel Jesus</label>
                <label className="w-1/5 bg-gray-400 h-12 py-3" htmlFor="kraken">20 cupos Disponibles</label>
                <label className="w-1/5 bg-gray-500 h-12 py-3" htmlFor="kraken">Lun 07:00 - 08:30</label>
              </div>
            </li>
            
            <li className="py-2 px-4 hover:bg-gray-100">
              <div className="flex mb-4 text-center " >
                <input className="w-1/5 bg-gray-500 h-10 after:py-3" type="radio" id="kraken" name="monster" value="K"/>
                <label className="w-1/5 bg-gray-400 h-12 py-3" htmlFor="kraken">Grupo SA</label> 
                <label className="w-1/5 bg-gray-500 h-12 py-3" htmlFor="kraken">Peinado Pereira Miguel Jesus</label>
                <label className="w-1/5 bg-gray-400 h-12 py-3" htmlFor="kraken">20 cupos Disponibles</label>
                <label className="w-1/5 bg-gray-500 h-12 py-3" htmlFor="kraken">Lun 07:00 - 08:30</label>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
