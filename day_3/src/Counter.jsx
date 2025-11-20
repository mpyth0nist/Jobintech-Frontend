import useCounter from "./hooks/useCounter";

function Counter(){
    const { count, increment, decrement, reset } = useCounter(5)

    return (
        <>
            <p>{count}</p>   
            <button onClick={increment}>+</button>
            <button onClick={increment}>-</button>
            <button onClick={reset}>Reset</button>
        
        </>
    )
}

export default Counter;