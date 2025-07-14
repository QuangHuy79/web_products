// src/Components/Product.jsx
import React from "react";
import "../styles/Product.css";
import { useNavigate } from "react-router-dom";
import { useCart } from "../cart/CartReducer";

function Product(props) {
  const { image, title, price, description, category, id } = props;
  const { dispatch } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id: props.id,
        name: props.title,
        price: props.price,
        image: props.image,
      },
    });
  };

  const handleDetails = () => {
    navigate(`/products/${id}`);
  };

  return (
    <section className="product-card">
      <img
        className="product-image"
        src={image}
        alt={title}
        onClick={handleDetails}
      />
      <div className="product-content">
        <h6 className="product-title" onClick={handleDetails}>
          {title}
        </h6>
        <p>
          <strong>Giá:</strong> ${price}
        </p>
        <p className="description">
          <strong>Mô tả:</strong> {description}
        </p>
        <p>
          <strong>Danh mục:</strong> {category}
        </p>
      </div>
      <button onClick={handleAddToCart} className="golden-button">
        <span className="golden-text">Thêm vào giỏ hàng</span>
      </button>
    </section>
  );
}

export default Product;
