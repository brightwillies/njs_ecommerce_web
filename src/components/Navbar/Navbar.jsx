import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import "./Navbar.scss";
import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import nav_dropdown from "../assets/nav_dropdown.png";

function Navbar() {

    const [menu, setMenu] = useState("shop");
    const { getTotalCartItems } = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }


    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <img className="nav-dropdown" onClick={dropdown_toggle} src={nav_dropdown} alt="" />
            <ul ref={menuRef} className="nav-menu">
                <li onClick={() => setMenu("shop")}>
                    <Link to="/">
                        Shop {menu === "shop" ? <hr /> : <></>}
                    </Link>
                </li>
                <li onClick={() => setMenu("mens")}>
                    <Link to="/mens">
                        Men {menu === "mens" ? <hr /> : <></>}
                    </Link>
                </li>
                <li onClick={() => setMenu("women")}>
                    <Link to="/women">
                        Women {menu === "women" ? <hr /> : <></>}
                    </Link>
                </li>
                <li onClick={() => setMenu("kids")}>
                    <Link to="/kids">
                        Kids {menu === "kids" ? <hr /> : <></>}
                    </Link>
                </li>
            </ul>

            <div className="nav-login-cart">
                {localStorage.getItem('auth-token') ?
                    <button  className="button"  onClick={() => {
                        localStorage.removeItem('auth-token');
                        window.location.replace("/");
                    }}>Logout</button> : <Link to="/login">
                        <button className="button">
                            Login
                        </button>   </Link>
                }


                <Link to="/cart">
                    <img src={cart_icon} alt="" />
                </Link>
                <div className="nav-cart-count">
                    {getTotalCartItems()}
                </div>


            </div>
        </div>
    )
}

export default Navbar
