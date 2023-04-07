import {useSelector, useDispatch} from "react-redux";
import { decrement, increment } from "../actions";

const Counter = () => {
    const counter = useSelector(
        state => {
            console.log(state)
            return state.count
        }
    )
    const handleIncrement = () => {
        dispatch(increment())
    }
    const handleDecrement = () => {
        dispatch(decrement())
    }
    const dispatch = useDispatch()
    return(
        <div>
            <button onClick={handleDecrement}>Decrement</button>
            <p>Counter: {counter}</p>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}

export default Counter