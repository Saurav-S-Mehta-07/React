import Products from "./Products";
import Heading from "./Heading";

export default function ProductPage(){
    let styles = {
        border:"1px solid black",
        borderRadius:"20px"
    };
    return(
        <div style={styles}>
           <Heading/>
           <Products/>
        </div>
    )
}