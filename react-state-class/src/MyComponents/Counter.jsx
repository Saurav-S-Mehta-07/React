import { useState } from "react"

export default function Counter(){
    let [count, setCount] = useState(0); //initialization
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