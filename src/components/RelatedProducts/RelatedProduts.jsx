
import "./RelatedProducts.scss";

import data_product from "../assets/data.js"
import Item from '../Item/Item.jsx';
function RelatedProduts() {
    return (
        <div className="relatedproducts">
            <h1>  RELATED PRODUCTS</h1>
            <hr />

            <div className="relatedproducts-item">


                {data_product.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default RelatedProduts
