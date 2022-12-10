import { useState } from "react";
import Button from "../Button/Button";
import "./ItemCount.css";

function ItemCount(props) {
  const [number, setNumber] = useState(props.init);

  //Resta un item, siempre que el valor sea mayor a 1
  function handleClickRestar() {
    number > 1 && setNumber(number - 1);
  }

  //Suma un item, siempre que el valor sea menor al stock disponible
  function handleClickSumar() {
    number < props.stock && setNumber(number + 1);
  }

  return (
    <div className="buy">
      <div className="buy-counter">
        <Button text="-" onClick={handleClickRestar} show={props.show} />
        <span
          className="counter-number"
          onChange={props.onChangeQuantity && props.onChangeQuantity(number)}
        >
          {number}
        </span>
        <Button text="+" onClick={handleClickSumar} show={props.show} />
      </div>
      {props.isInCart && <small>Stock disponible: {props.stock}</small>}
      {props.showButtonAddToCart && (
        <Button
          text="Agregar al carrito"
          onClick={props.changeCondition}
          cant={number}
        />
      )}
    </div>
  );
}

export default ItemCount;
