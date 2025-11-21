import { useState } from "react";

function useLocalStorage({ key, initialValue }){

    const [value, setValue] = useState(() => {
        const found = localStorage.getItem(key)

        if(found){
            return JSON.parse(found)
        } else {
            return found
        }

        

    }

    )
    
}