import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Cart from "../components/cart/Cart";
import Product from './product/Product';

const Rout = ({ product, setProduct, detail, detailPage, cart, setCart, addToCart }) => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Product" element={<Product product={product} setProduct={setProduct} detail={detail} detailPage={detailPage} addToCart={addToCart} />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Cart" element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Rout