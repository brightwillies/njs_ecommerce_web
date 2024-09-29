
import "./Breadcrumbs.scss";
import arrow_icon from "../assets/breadcrum_arrow.png";
function Breadcrumbs(props) {
    const { product } = props;
    return (
        <div className="breadcrumbs">
            Home <img src={arrow_icon} alt="" />
            Shop <img src={arrow_icon} alt="" />
            {product.category} <img src={arrow_icon} alt="" />
            {product.name}
        </div>
    )
}

export default Breadcrumbs
