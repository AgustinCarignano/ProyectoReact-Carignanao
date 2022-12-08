import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../Contexts/cartContext";
import Button from "../Button/Button";
import ItemCount from "../ItemCount/ItemCount";
import "./Cart.css";

function Cart() {
  const {
    cart,
    deleteItem,
    cleanCart,
    cartTotalPrice,
    totalItemsInCart,
    addToCart,
  } = useContext(cartContext);

  function addToCartFromCart(item, cant) {
    if (item.cantidad !== cant) {
      addToCart(item, cant);
    }
  }

  if (cart.length === 0) {
    return (
      <div className="emptyCart">
        <h2>¡Tu carrito está vacío!</h2>
        <p>Navega y elije productos para agregar al carrito.</p>
        <Link to="/">
          <Button text="Bucar productos" />
        </Link>
      </div>
    );
  }
  return (
    <div className="cart">
      <h2 className="cart-title">
        Carrito <small>({totalItemsInCart()})</small>
      </h2>
      <div className="cart-header">
        <h3 className="header-producto">Producto</h3>
        <h3 className="header-precio">Precio unitario</h3>
        <h3 className="header-cantidad">Cantidad</h3>
        <h3 className="header-subtotal">Subtotal</h3>
      </div>
      {cart.map((item) => {
        return (
          <div className="cart-item" key={item.id}>
            <div className="item-product">
              <div className="product-img">
                <img src={item.imgurl}></img>
              </div>
              <div className="product-title">
                <h3>{item.title}</h3>
                <h6>{item.subTitle}</h6>
              </div>
            </div>
            <h4 className="item-price">${item.precioActual}</h4>
            <ItemCount
              init={item.cantidad}
              stock={item.stock}
              isInCart={false}
              showButtonAddToCart={false}
              onChangeQuantity={(cant) => addToCartFromCart(item, cant)}
              show={"smaller"}
            />
            <div className="item-subtotal">
              <h4>${item.precioActual * item.cantidad}</h4>
              <Button
                onClick={() => deleteItem(item.id)}
                text="X"
                show="smaller"
              />
            </div>
          </div>
        );
      })}
      <div className="cartResume">
        <h3>Total del carrito: ${cartTotalPrice()}</h3>
      </div>
      <div className="optionButtons">
        <Link to="/">
          <Button text="Seguir comprando" show="smaller" />
        </Link>
        <Button onClick={cleanCart} text="Vaciar carrito" show="smaller" />
        <Link to="/checkout">
          <Button text="Continuar compra" show="bigger" />
        </Link>
      </div>
    </div>
  );
}

export default Cart;
