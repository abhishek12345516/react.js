import { useState } from "react"
import Counter from "./component/Conuter"
import UseCase1 from "./component/UseCase1"
import UseCase2 from "./component/UseCase2";
import Timer from "./component/Timer";
import RealTimeClook from "./component/RealTimeClook";


function App() {
  const [flag,setFlag]=useState(false);
  const handler=()=>{
    flag?setFlag(false):setFlag(true);
  }

  return (
    <div>
      <RealTimeClook/>
          <Timer/>
     {/* {flag? <UseCase1/>: ''}
     <button onClick={handler}>{flag?'Hide':'Show'}</button>
      <Counter/> */}
      <UseCase2/>
  
      </div>
  )
}

export default App
