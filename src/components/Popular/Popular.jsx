
import "./Popular.scss";

// import data_product from "../assets/data.js"
import Item from '../Item/Item';
import { useState, useEffect } from "react";

function Popular() {
   
    const [data_product,  setNewCollection] = useState([]);
    useEffect(() => {
        fetch('https://njs-ecom-api.onrender.com/popularinwomen').then((response) => response.json()).
            then((data) => setNewCollection(data));
    }, []);

    return (
        <div className="popular">
            <h1>POPULAR IN  WOMEN</h1>
            <hr />
            <div className="popular-item">
                {data_product.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>

        </div>
    )
}

export default Popular
