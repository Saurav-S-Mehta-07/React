import Title from "./Title";
import Description from "./Description";
import "../ComponentsCss/Product.css"

function Product({title,description,price}){
    return (
        <div className="Product">
          <Title title={title}/>
          <Description description={description}/>
          <h3>Price : {price}</h3>
        </div>
    )
}

export default  Product;