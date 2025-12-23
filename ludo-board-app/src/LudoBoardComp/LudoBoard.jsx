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


    let [blueMoves, setBlueMoves] = useState(0);
    let [yellowMoves, setYellowMoves] = useState(0);
    let [redMoves, setRedMoves] = useState(0);
    let [greenMoves, setGreenMoves] = useState(0);


    let incBlue = ()=>{
          setBlueMoves((currMoves)=>{
            return currMoves+1;
          })
    }

    let incRed= ()=>{
          setRedMoves((currMoves)=>{
            return currMoves+1;
          })
    }

    let incYellow = ()=>{
          setYellowMoves((currMoves)=>{
            return currMoves+1;
          })
    }

    let incGreen = ()=>{
          setGreenMoves((currMoves)=>{
            return currMoves+1;
          })
    }

    return(
        <>
        <p>Game Begins</p>
        <div style={styles}>
            <div style={playerStyle}>
                <p>Red Player Moves</p>
                <button onClick={incRed} style={{backgroundColor:"pink"}}> + {redMoves}</button>
            </div>
            <div style={playerStyle}>
                <p>blue Player Moves</p>
                <button onClick={incBlue} style={{backgroundColor:"lightblue"}}> + {blueMoves}</button>
            </div>
            <div style={playerStyle}>
                <p>Yellow Player Moves</p>
                <button onClick={incYellow}style={{backgroundColor:"yellow"}}> + {yellowMoves}</button>
            </div>
            <div style={playerStyle}>
                <p>Green Player Moves</p>
                <button onClick={incGreen} style={{backgroundColor:"lightgreen"}}> + {greenMoves}</button>
            </div>
        </div>
        </>
    )
}