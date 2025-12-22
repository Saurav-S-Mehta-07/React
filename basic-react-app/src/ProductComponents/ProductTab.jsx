
import Product from "./Product";
import "../ProductComponentsCss/ProductTab.css"

function ProductTab(){
    return (
        <div className="ProductTab">
          <Product title="Product 1" description="this is description 1" features={["high tech", "durable"]} option={{a:"abc", b:"ced"}}/>
          <Product title="Product 2" description="this is description 2" price={699} features={["high tech", "durable"]} option={{a:"abc", b:"ced"}}/>
          <Product title="Product 3" description="this is description 3" price={789} features={["high tech", "durable"]} option={{a:"abc", b:"ced"}}/>
          <Product title="Product 4" description="this is description 4" price={999} features={["high tech", "durable"]} option={{a:"abc", b:"ced"}}/>
        </div>
    )
}

export default ProductTab;