import "./NewCollections.scss";

// import new_collection from "../assets/new_collections.js";
import Item from '../Item/Item';
import { useState, useEffect } from "react";

function NewCollections() {

    const [new_collection,  setNewCollection] = useState([]);
    useEffect(() => {
        fetch('https://njs-ecom-api.onrender.com/newcollections').then((response) => response.json()).
            then((data) => setNewCollection(data));
    }, []);
    return (

        <div className="new-collections">

            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="collections">
                {new_collection.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />

                })}
            </div>
        </div>

    )
}

export default NewCollections
