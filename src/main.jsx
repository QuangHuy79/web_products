// File: main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { CartProvider } from "./cart/CartReducer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
