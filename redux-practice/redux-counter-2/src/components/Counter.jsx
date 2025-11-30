import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, reset, divideByTwo, double } from "../features/counterSlice"
export default function Counter(){

    const value = useSelector(state => state.counter.value)

    const dispatch = useDispatch()

    return(
        <div>
            <h2>Redux Counter Practice</h2>
            <p>{value}</p>

            <button onClick={() => dispatch(increment())}>+1</button>
            <button onClick={() => dispatch(decrement())}>-1</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
            <button onClick={() => dispatch(double())}>Double</button>
            <button onClick={() => dispatch(divideByTwo())}>Divide by Two</button>

        </div>
    )
}