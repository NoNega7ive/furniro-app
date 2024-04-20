import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Shop from "./components/pages/Shop";
import Footer from "./components/Footer";
import Product from "./components/product-page-components/Product";
import Comparison from "./components/pages/Comparison";
import Cart from "./components/pages/Cart";
import Checkout from "./components/pages/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/comparison" element={<Comparison />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;