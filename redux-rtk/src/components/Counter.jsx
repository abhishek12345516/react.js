import { useDispatch, useSelector } from "react-redux";
import { decrement, decrementByAmount, increment, incrementByAmount } from "../features/counterSlice";

function Counter() {

  const count = useSelector(state=>state.counter.value);
    const dispeatch = useDispatch();
    return ( 
        <div>
            <h3>Count: {count}</h3>
            <button className="btn btn-success ms-3"
            onClick={()=>dispeatch(increment())}>increment</button>
            <button className="btn btn-danger ms-3"
             onClick={()=>dispeatch(decrement())}>decrement</button>
            <button className="btn btn-success ms-3"
             onClick={()=>dispeatch(incrementByAmount(5))}>Increment by Amount 5</button>
            <button className="btn btn-danger ms-3"
             onClick={()=>dispeatch(decrementByAmount(3))}>Decrement by Amount 3</button>
        </div>
     );
}

export default Counter;
