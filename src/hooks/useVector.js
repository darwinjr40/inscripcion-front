import { useState } from "react"


export const useVector = ( initialValue = [] ) => {

    const [ vector, setVector ] = useState( initialValue )

    const addVector = ( value) => {
        setVector((vec) => [...vec, value ]);
    }

    const removeVector = (id) => {        
        setVector(
            vector.filter((e) => (e.id !== id))
        );
    }

    const resetVector = () => {
        setVector( initialValue );
    }

    return {
        vector,
        addVector,
        removeVector,
        resetVector,
    }

}

