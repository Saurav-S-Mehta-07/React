import { useState } from "react"
import "./Lottery.css";
import {genTicket,sum} from "./Helper.js";
import Ticket from "./Ticket.jsx";
import BuyTicket from "./BuyTicket.jsx";


const Lottery = ({n = 3,winnigSum = 15}) => {
  let [ticket,setTicket] = useState(genTicket(3));
  let isWinnig = sum(ticket) === winnigSum;

  let buyTicket = ()=>{
    setTicket(genTicket(n));
  }

  return (
    <div>
        <h1>Lottery Game</h1>
        <p>when sum : {winnigSum}, you'll win</p>
        <Ticket ticket={ticket}/>
        <hr />
        <BuyTicket buyTicket={buyTicket}/>
        <hr />
        <h3>{isWinnig && "Congratulations, you win"}</h3>
    </div>
  )
}

export default Lottery