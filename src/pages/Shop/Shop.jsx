
import Hero from "../../components/Hero/Hero";
import NewCollections from "../../components/NewCollections/NewCollections";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import Offers from "../../components/Offers/Offers";
import Popular from "../../components/Popular/Popular";
import "./Shop.scss";
function Shop() {
    return (
        
        <div className="shop">
            <Hero/>
            <Popular/>
            <Offers/>
            <NewCollections/>
            <NewsLetter/>
        </div>
    )
}

export default Shop
