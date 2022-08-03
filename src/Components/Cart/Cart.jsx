import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  removeFromCart,
  clearCart,
  increase,
  getCartTotal,
  decrease,
} from "../../ReduxToolkit/slice.js";
const Cart = () => {
  const router = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cart.cartItems);
  const TotalAmount = useSelector((state) => state.cart.totalPrice);
  useEffect(() => {
    dispatch(getCartTotal());
  }, [state]);
  const handlerCart = state.map((products) => {
    return (
      <div className="col-12  gap-4">
      <div className="row align-items-center justify-content-center">
      <div className="col-4 ">
        <img
          src={products.image}
          alt={products.title}
          className="img-fluid"
        />
      </div>
      <div className="col-6 d-flex flex-column   ">
        <h3>{products.title}</h3>
        <h3>${products.price}</h3>
        <div className="Control-cart btn btn-outline-danger">
          <span
            className="p-2 fs-4"
            onClick={() => dispatch(decrease(products))}
          >
            -
          </span>
          <span className="p-2 fs-4">{products.amount}</span>
          <span
            className="p-2 fs-4"
            onClick={() => dispatch(increase(products))}
          >
            +
          </span>
        </div>
        <h3 className="mt-4">Total:${products.price * products.amount}</h3>
      </div>
      <div className="col-2 d-flex   ">
        <button
          className="btn btn-outline-danger"
          onClick={() => dispatch(removeFromCart(products))}
        >
          Dalet
        </button>
      </div>
    </div>
    </div>

    );
  });
  const handler = () => {
    if (state.length >= 1) {
      return (
        <div className="container py-4">
          <div className="row gap-4">
         
          {handlerCart}
          </div>
          <hr />
          <div className="d-flex  justify-content-around">
            <h1
              className="btn btn-outline-danger d-flex justify-content-center align-items-center px-5 "
              onClick={() => dispatch(clearCart())}
            >
              Clear All
            </h1>
            <h1>${TotalAmount}</h1>
          </div>
        </div>
      );
    } else {
      return (
        <div className="Go-shopping">
          <h1 onClick={() => router("/Products")}>Lets Go shopping</h1>
        </div>
      );
    }
  };
  return <>{handler()}</>;
};

export default Cart;
