import { useEffect, useState } from "react";

function Timer() {
    const [count, setCount] = useState(0);
    useEffect(() =>{
        setTimeout(() =>setCount(count + 1), 1000)
    })
    return ( 
        <div>
            <h1 className="text-center">Timer: {count}</h1>
        </div>
     );
}

export default Timer;