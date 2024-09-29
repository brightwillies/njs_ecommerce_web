/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
// import all_product from "../components/assets/all_product.js"
export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};

    for (let index = 1; index < 300 + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [all_product, setAllProduct] = useState([]);
    const [cartItems, setCartItems] = useState(getDefaultCart());

    useEffect(() => {
        fetch('https://njs-ecom-api.onrender.com/allproducts').then((response) => response.json()).
            then((data) => setAllProduct(data));

        if (localStorage.getItem('auth-token')) {

            fetch("https://njs-ecom-api.onrender.com/getcart", {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': "application/json",
                    "auth-token": `${localStorage.getItem('auth-token')}`
                },
                body: ""
            }).then((response) => response.json()).
                then((data) => setCartItems(data));
        }
    }, []);
    // const addToCart = (itemId) => {
    //     setCartItems((prev) => {
    //         console.log('Adding item with ID:', itemId); // Debug log
    //         return { ...prev, [itemId]: prev[itemId] + 1 };
    //     });

    // }
    const addToCart = async (itemId) => {

        setCartItems((prev) => {
            const updatedCart = { ...prev, [itemId]: prev[itemId] + 1 };

            if (localStorage.getItem('auth-token')) {
                fetch("https://njs-ecom-api.onrender.com/addtocart", {
                    method: "POST",
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': "application/json",
                        "auth-token": `${localStorage.getItem('auth-token')}`
                    },
                    body: JSON.stringify({ 'itemid': itemId })
                })
                    .then((response) => response.json())
            }
            console.log('Updated Cart:', updatedCart); // Debug log
            return updatedCart;
        });
    }


    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        if (localStorage.getItem('auth-token')) {
            fetch("https://njs-ecom-api.onrender.com/removefromcart", {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': "application/json",
                    "auth-token": `${localStorage.getItem('auth-token')}`
                },
                body: JSON.stringify({ 'itemid': itemId })
            })
                .then((response) => response.json())
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];

            }

        }
        return totalAmount;
    }
    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue = { getTotalCartItems, getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart }
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;