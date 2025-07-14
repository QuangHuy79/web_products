import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/ProductDetails.css";
import { useCart } from "../cart/CartReducer";

function ProductDetails() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const { dispatch } = useCart();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error("Lỗi API:", err));
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          id: product.id,
          name: product.title,
          price: product.price,
          image: product.image,
        },
      });
    }
  };

  const handleBack = () => {
    navigate("/products");
  };

  if (!product) return <p>Đang tải mô tả chi tiết sản phẩm...</p>;

  return (
    <div className="details-wrapper">
      <section className="details-container">
        <img
          className="details-image"
          src={product.image}
          alt={product.title}
        />

        <div className="details-right">
          <div className="details-content">
            <h3>{product.title}</h3>
            <p>
              <strong>Giá:</strong> ${product.price}
            </p>
            <p>
              <strong>Mô tả:</strong> {product.description}
            </p>
            <p>
              <strong>Danh mục:</strong> {product.category}
            </p>
          </div>

          <div className="details-button-group">
            <button className="golden-button" onClick={handleAddToCart}>
              Thêm vào giỏ hàng
            </button>
            <button className="golden-button" onClick={handleBack}>
              Quay lại
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductDetails;
