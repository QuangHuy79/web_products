import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../cart/CartReducer";
import "../styles/Header.css";
import "../styles/CategoryMenu.css"; // 👈 để dùng lại .category-btn

function Header() {
  const { cartItems } = useCart();
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="site-header">
      <nav className="navbar">
        {/* Logo */}
        <Link to="/products">
          <button className="category-btn">🛍️ WebProducts</button>
        </Link>

        <div className="nav-links">
          <Link to="/products">
            <button className="category-btn">📦 Đăng nhập</button>
          </Link>
          <Link to="/products">
            <button className="category-btn">📦 Sản phẩm</button>
          </Link>

          <Link to="/cart">
            <button className="category-btn">
              🛒 Giỏ hàng
              {totalQuantity > 0 && (
                <span className="cart-badge">{totalQuantity}</span>
              )}
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
