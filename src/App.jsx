import Navbar from './components/Navbar/Navbar.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from './pages/Shop/Shop.jsx';
import Category from './pages/Category/Category.jsx';
import Product from './pages/Product/Product.jsx';
import Cart from './pages/Cart/Cart.jsx';
import LoginSignup from './pages/Shop/Login/LoginSignup.jsx';
import Footer from './components/Footer/Footer.jsx';
import men_banner from "./components/assets/banner_mens.png";
import women_banner from "./components/assets/banner_women.png";
import kids_banner from "./components/assets/banner_kids.png";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Shop />} /> 
          <Route path="/mens" element={<Category banner={men_banner}   category="men" />} />
          <Route path="/women" element={<Category banner={women_banner}  category="women" />} />
          <Route path="/kids" element={<Category banner={kids_banner} category="kid" />} />
          <Route path="/product" element={<Product />} >
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={< LoginSignup/>} />

        </Routes>
        <Footer/>
      </BrowserRouter>


    </div>
  )
}

export default App
