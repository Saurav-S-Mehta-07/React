import { useState } from "react";

function init(){
    console.log("init was executed");
    return Math.random();
}

export default function Counter(){
    let [count, setCount] = useState(init); //initialization
    let incCount= ()=>{
       setCount((currCount)=>{
            return currCount + 1;
       });
       setCount((currCount)=>{
         return currCount+1;
       });
    }
    return(
        <div>
            <h1>States in React</h1>
            <h3>count = {count} </h3>
            <button onClick={incCount} >Incerese Count</button>
        </div>
    )
}