import { useState } from "react"

export default function LudoBoard(){
    let styles = {
        border : "2px solid black",
        borderRadius :"20px",
        display : "flex",
        justifyContent:"space-evenly",
        padding:"20px"
    }
    let playerStyle = {
        border :"2px solid black",
        borderRadius :"20px",
        padding:"10px",
    }


    let [state, setState] = useState({red:0, blue:0, yellow : 0, green : 0});

    let incBlue = ()=>{
        setState((currObj)=>{
             return {...currObj,blue:state.blue+1};
        })  
    }

    let incRed= ()=>{
        setState((currObj)=>{
            return {...currObj,red:state.red+1};
        })    
    }

    let incYellow = ()=>{
        setState((currObj)=>{
            return {...currObj,yellow:state.yellow+1};
        })  
    }

    let incGreen = ()=>{
        setState((currObj)=>{
            return {...currObj,green:state.green+1};
        })  
    }

    return(
        <>
        <p>Game Begins - learning (object states)</p>
        <div style={styles}>
            <div style={playerStyle}>
                <p>Red Player Moves</p>
                <button onClick={incRed} style={{backgroundColor:"pink"}}> + {state.red}</button>
            </div>
            <div style={playerStyle}>
                <p>blue Player Moves</p>
                <button onClick={incBlue} style={{backgroundColor:"lightblue"}}> + {state.blue}</button>
            </div>
            <div style={playerStyle}>
                <p>Yellow Player Moves</p>
                <button onClick={incYellow}style={{backgroundColor:"yellow"}}> + {state.yellow}</button>
            </div>
            <div style={playerStyle}>
                <p>Green Player Moves</p>
                <button onClick={incGreen} style={{backgroundColor:"lightgreen"}}> + {state.green}</button>
            </div>
        </div>
        </>
    )
}