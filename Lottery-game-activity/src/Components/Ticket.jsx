import TicketNum from "./TicketNum";

export default function Ticket({ticket}){
    let styles = {
        border : "1px solid pink",
        borderRadius : "15px",
        marginBottom : "15px"
    }
   return(
      <div style={styles}>
        <p>Ticket</p>
        {
           ticket.map((n,i)=>
            <TicketNum num={n}  key={i}/>
           )
        }
      </div>
   )
}