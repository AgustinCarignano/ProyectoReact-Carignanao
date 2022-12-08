import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../Contexts/cartContext";
import "./NavBar.css";

function CartWidget() {
  const { totalItemsInCart } = useContext(cartContext);
  return (
    <div className="widget">
      <Link to="/cart">
        <img src="/images/cart.png" alt="" className="widget-img" />
      </Link>
      <p
        className={
          totalItemsInCart() !== 0 ? "widget-total" : "widget-total hideTotal"
        }
      >
        {totalItemsInCart()}
      </p>
    </div>
  );
}

export default CartWidget;
