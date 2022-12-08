import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import ToggleFav from "../ToggleFav/ToggleFav";
import "./Item.css";

function Item({ product }) {
  const urlDetail = `/productos/${product.id}`;
  let className;

  product.stock === 0
    ? (className = " card withoutStock")
    : (className = "card");

  return (
    <div className={className}>
      <Link to={urlDetail}>
        <img src={product.imgurl} alt={product.title} className="card-img" />
      </Link>
      <div className="card-details">
        <h3>{product.title}</h3>
        <h6>{product.subTitle}</h6>
        {product.discount > 0 ? (
          <p>
            Precio:
            <small style={{ textDecoration: "line-through" }}>
              ${product.price}
            </small>
            ${product.price * (1 - product.discount)}
          </p>
        ) : (
          <p>Precio: ${product.price}</p>
        )}
        <Link to={urlDetail}>
          <Button text="Detalle" show="smaller" />
        </Link>
      </div>
      {product.stock === 0 && (
        <span className="withoutStockSpan">Sin stock</span>
      )}
      {product.discount > 0 && (
        <span className="inOffer">{product.discount * 100}% Off</span>
      )}
      <ToggleFav product={product} />
    </div>
  );
}

export default Item;
