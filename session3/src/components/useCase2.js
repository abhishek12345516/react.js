import { useState } from "react";

function UseCase2() {
    const [count,setConut]= useState(0);
    const increment = ()=>{
        setConut(count+1);
    }
    const decrement = ()=>{
        if(count===0){
            alert('You connot decrese as its already 0')
        }else{
            setConut(count-1)
        }
    }
    return ( 
        <div>
            <h3>Count: {count}</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
     );
}

export default UseCase2;