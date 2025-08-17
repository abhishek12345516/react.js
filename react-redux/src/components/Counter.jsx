import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Redux/Action";

function Counter() {
    const count = useSelector(state=>state.counter.count);
    const dispatch = useDispatch();
    return ( 
        <div>
            <h1>Counter: {count}</h1>
            <button className="btn btn-success"
            onClick={()=>dispatch(increment())}>Increment</button>
            <button className="btn btn-danger ms-3"
            onClick={()=>dispatch(decrement())}>Decrement</button>
        </div>
     );
}

export default Counter;