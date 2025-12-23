
import {printHello, printMsg} from "./Button.js";

function handleForm(event){
    event.preventDefault();
    console.log("submmiteed");
}

export default function Button(){
    return(
        <>
    

          <form action="" onSubmit={handleForm}>
            <input type="text" placeholder="write something"/>
            <button>Submit</button>
          </form>
    
        </>
    )
}