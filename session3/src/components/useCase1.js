import { useState } from "react";

function UseCase1() {
    const [name,setName]= useState('Abhishek Prajapati');
    const change = ()=>{
        setName('Skill Academy');
    }
    return ( 
        <div>
            <h1>Simple State Example</h1>
            <h3>Welcome {name}</h3>
            <button onClick={change}>Change Name</button>
        </div>
     );
}

export default UseCase1;