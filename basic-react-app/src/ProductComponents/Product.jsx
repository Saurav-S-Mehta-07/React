import Title from "./Title";
import Description from "./Description";
import "../ProductComponentsCss/Product.css"

function Product({title,description,price=701,features,option}){
  let isDiscount = price>700;
  let styles={backgroundColor: isDiscount?"pink":"lightblue"} 
    return (
        <div className="Product" style={styles}>
          <Title title={title}/>
          <Description description={description}/>
          <h3>Price : {price}</h3>
          {isDiscount && <p>Discount of 5%</p>}
          <ul>{features.map(feature=><li>{feature}</li>)}</ul>
          <p>{option.a}</p>
        </div>
    )
}

export default  Product;