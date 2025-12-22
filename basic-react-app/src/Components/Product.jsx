import Title from "./Title";
import Description from "./Description";
import "../ComponentsCss/Product.css"

function Product({title,description,price=700,features,option}){
    return (
        <div className="Product">
          <Title title={title}/>
          <Description description={description}/>
          <h3>Price : {price}</h3>
          {price>700?<p>Discout of 5%</p>:null}
          <ul>{features.map(feature=><li>{feature}</li>)}</ul>
          <p>{option.a}</p>
        </div>
    )
}

export default  Product;