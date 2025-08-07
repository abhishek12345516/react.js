import { useEffect, useState } from "react";

function RealTimeClook() {
    const [time, setTime] = useState(null);
    useEffect(() =>{
        const interval = setInterval(() =>{
            setTime(new Date());
        },1000)

        return (()=>clearInterval(interval));
    })
    return ( 
        <div className="text-center">
            <h3>Rael Time Clook: {time && time.toLocaleTimeString()}</h3>
        </div>
     );
}

export default RealTimeClook;