import React from "react";
import "./App.css";
import AllProducts from "./Components/AllProducts";
import Cart from "./cart/Cart";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./cart/CartReducer";
import Header from "./Components/Header";
import ProductDetails from "./Components/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/products" replace />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="*" element={<div>404 - Not Found</div>} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
