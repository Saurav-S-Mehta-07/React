
import {printHello, printMsg} from "./Button.js";

function handleForm(event){
    event.preventDefault();
    console.log("submmiteed");
}

export default function Button(){
    return(
        <>
          <button onClick={printHello}>Print Hello</button>
          <br />
          <button onClick={printMsg}>Print Msg</button>
          <form action="" onSubmit={handleForm}>
            <input type="text" placeholder="write something"/>
            <button>Submit</button>
          </form>
    
        </>
    )
}