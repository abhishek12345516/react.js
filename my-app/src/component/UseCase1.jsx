import { useEffect, useState } from "react";

function UseCase1() {
  const [name, setName] = useState("");
  const [count,setCount] =useState(0);
  useEffect(() =>{
    console.log("My component Rendered");
    return (()=>console.log('component unmuted'));
  },[])
  useEffect(()=>{
    console.log("value Name: "+name);
    return (()=>console.log("Name Removed form Memory"));
  },[name]);
  useEffect(()=>{
    console.log("Value Count: "+count);
    return (()=>console.log('count Removed form Memory'));
  }) 
  return (
    <div className="text-center">
      <h1>Use Case 1</h1>
      <h3>Name: {name}</h3>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <div className="container text-center">
        <h2>Counter App {count}</h2>
        <button
          className="btn btn-primary ms-2"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          className="btn btn-primary ms-2"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
        <button className="btn btn-danger ms-2" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default UseCase1;
