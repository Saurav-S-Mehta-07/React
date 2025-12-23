import { useState } from "react"

export default function Counter(){

    // let [state,setState] = useState(0);
    let [count, setCount] = useState(0);
    let incCount= ()=>{
       setCount(count+1);
       console.log(count);
    }
    return(
        <div>
            <h1>States in React</h1>
            <h3>count = {count} </h3>
            <button onClick={incCount} >Incerese Count</button>
        </div>
    )
}