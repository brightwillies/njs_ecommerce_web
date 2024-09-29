import { useContext } from "react"
import { ShopContext } from "../../context/ShopContext"
import { useParams } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import "./Product.scss";
import ProductDisplay from "../../components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../../components/DescriptionBox/DescriptionBox";
import RelatedProduts from "../../components/RelatedProducts/RelatedProduts";

function Product() {
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams();

    const product = all_product.find((e) => e.id === Number(productId))

    return (
        <div className="product">
            <Breadcrumbs product={product} />
            <ProductDisplay    product={product}  />
            <DescriptionBox product={product}/>
            <RelatedProduts/>
        </div>
    )
}

export default Product
