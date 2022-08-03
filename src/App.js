import React from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products.jsx";
import Product from "./Components/Product/Product.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from './Components/Cart/Cart'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products/>} />
          <Route path="Products:id" element={<Product/>} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

