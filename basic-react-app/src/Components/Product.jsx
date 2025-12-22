import Title from "./Title";
import Description from "./Description";
import "../ComponentsCss/Product.css"

function Product(){
    return (
        <div className="Product">
          <Title/>
          <Description/>
        </div>
    )
}

export default  Product;