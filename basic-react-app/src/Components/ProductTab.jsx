
import Product from "./Product";
import "../ComponentsCss/ProductTab.css"

function ProductTab(){
    return (
        <div className="ProductTab">
          <Product/>
          <Product/>
          <Product/>
          <Product/>
        </div>
    )
}

export default ProductTab;