import { useState, useEffect } from "react"

export default function Counter(){

    let [countX,setCountX] = useState(0);
    let [countY,setCountY] = useState(0);

    let incCountX = ()=>{
        setCountX((prevCount)=>{
            return prevCount+1;
        })
    }

    let incCountY = ()=>{
        setCountY((prevCount)=>{
            return prevCount+1;
        })
    }

    useEffect(function printSomething(){
        console.log("hi");
    }, []);

    return (
        <>
        <span>
            <h1 style={{color:countX%2?"red":"yellow"}}>CountX : {countX}</h1>
           <br />
           <button onClick={incCountX} style={{color:countX%2?"yellow":"red"}}><h2>+ 1</h2></button>
        </span>

        <span>
            <h1 style={{color:countY%2?"green":"blue"}}>CountY : {countY}</h1>
           <br />
           <button onClick={incCountY} style={{color:countY%2?"blue":"green"}}><h2>+ 1</h2></button>
        </span>

        </>
    )
}