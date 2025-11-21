import { useState, useEffect } from "react";
function useLocalStorage(key, defaultValue){

    const [theme, setTheme] = useState(() => {
        const found = localStorage.getItem(key);
        if(found){
            const storedTheme = JSON.parse(found)
            return storedTheme
        }else {
            return defaultValue
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(theme))
    }, [key, theme])


    return [theme, setTheme]
}

export default useLocalStorage;