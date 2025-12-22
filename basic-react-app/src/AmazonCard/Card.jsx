import Description from "./Description"
import Price from "./Price"
import Title from "./Title"

export default function Card({title="product",oldPrice,newPrice}){
    let styles = {
        display:"flex",
        flexDirection:"column",
        marginLeft:"12px",
        width:"20%",
        border:"2px solid black",
        borderRadius: "20px"
    };

    let descriptionStyles = {
        textAlign:"start",
        marginLeft:"30px"
    }

    let descriptions = ["durable","cost effective","fast","good quality"];
    return(
        <div style={styles}>
          <h3>{title}</h3>
          <div style={descriptionStyles}>
            {
                descriptions.map(d=><p>{d}</p>)
            }
          </div>
          <Price oldPrice={oldPrice} newPrice={newPrice}/>
        </div>
    )
}