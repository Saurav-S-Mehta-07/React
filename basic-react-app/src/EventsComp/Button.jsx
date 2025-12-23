
import { printHello,printMsg } from "./Button";

export default function Button(){
    return(
        <>
          <button onClick={printHello}>Print Hello</button>
          <button onClick={printMsg}>Print msg</button>
        </>
    )
}