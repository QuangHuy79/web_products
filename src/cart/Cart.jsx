import React from "react";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBInput,
  MDBCard,
  MDBCardBody,
  MDBContainer,
} from "mdb-react-ui-kit";
import { useCart } from "../cart/CartReducer";
import { useNavigate } from "react-router-dom";
import "../styles/Product.css"; // 👈 dùng chung file CSS cho nút "golden-button"

function Cart() {
  const { cartItems, dispatch } = useCart();
  const navigate = useNavigate();

  const updateQuantity = (id, qty) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity: qty } });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id } });
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleBack = () => {
    navigate("/products");
  };

  return (
    <MDBContainer className="py-5">
      <h2 className="mb-4 text-center">🛒 Giỏ hàng của bạn</h2>
      <MDBCard>
        <MDBCardBody>
          <MDBTable responsive>
            <MDBTableHead>
              <tr>
                <th>Ảnh</th>
                <th>Tên SP</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Tổng</th>
                <th></th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img src={item.image} width="50" alt={item.name} />
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <MDBInput
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value))
                      }
                      style={{ width: "80px" }}
                    />
                  </td>
                  <td>${item.price * item.quantity}</td>
                  <td>
                    <button
                      className="golden-button"
                      onClick={() => removeItem(item.id)}
                    >
                      Xoá
                    </button>
                  </td>
                </tr>
              ))}
            </MDBTableBody>
          </MDBTable>
          <hr />
          <h4 className="text-end">
            Tổng cộng: <strong>${totalPrice}</strong>
          </h4>

          {/* ✅ Hai nút định dạng thống nhất */}
          <div className="d-flex justify-content-between mt-4">
            <button className="golden-button" onClick={handleBack}>
              ← Quay lại
            </button>
            <button className="golden-button">Thanh toán</button>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Cart;
