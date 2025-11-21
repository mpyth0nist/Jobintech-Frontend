import { useRef } from "react";

function Form(){

    let ref = useRef();

    const handleClick = () => {
        console.log(ref.current.value)
        alert('Vous avez tapé:' + ref.current.value)
    }
    
    return(
        <>
            <input type="text" ref={ref}/>

            <button onClick={handleClick}>Show Value</button>
        </>
    )
}

export default Form;