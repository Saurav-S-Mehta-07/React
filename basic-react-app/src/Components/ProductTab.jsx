
import Product from "./Product";
import "../ComponentsCss/ProductTab.css"

function ProductTab(){
    return (
        <div className="ProductTab">
          <Product title="Product 1" description="this is description 1" price={500}/>
          <Product title="Product 2" description="this is description 2" price={699}/>
          <Product title="Product 3" description="this is description 3" price={789}/>
          <Product title="Product 4" description="this is description 4" price={999}/>
        </div>
    )
}

export default ProductTab;