import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../Contexts/cartContext";
import Button from "../Button/Button";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

function ItemDetail({ product }) {
  const [addOption, setaddOption] = React.useState(true);
  const { addToCart, itemQuantity } = useContext(cartContext);

  //Función para ejecutar la carga al carrito del item y mostrar el botón para dirijirse al mismo
  function addedToCart(cant) {
    setaddOption(false);
    addToCart(product, cant);
  }

  return (
    <div className="itemDetail">
      <div className="itemDetail-img">
        <img
          src={product.imgurl}
          alt={product.title}
          className="itemDetail-img"
        />
      </div>
      <h2>{product.title}</h2>
      <h6>{product.subTitle}</h6>
      {product.discount > 0 ? (
        <h5>
          Precio:{" "}
          <small style={{ textDecoration: "line-through" }}>
            ${product.price}
          </small>{" "}
          ${product.price * (1 - product.discount)}
        </h5>
      ) : (
        <h5>Precio: ${product.price}</h5>
      )}
      {product.discount > 0 && (
        <small style={{ color: "green", fontWeight: "bold" }}>
          {product.discount * 100}% Off
        </small>
      )}
      <p>
        <b>Descripcion del producto:</b>
        <br />
        {product.description}
      </p>
      {product.stock === 0 ? (
        <p>
          <b>Sin stock disponible</b>
        </p>
      ) : (
        <div className="itemDetail-addToCart">
          {addOption ? (
            <ItemCount
              init={() => itemQuantity(product)}
              stock={product.stock}
              changeCondition={addedToCart}
              isInCart={addOption}
              showButtonAddToCart={true}
            />
          ) : (
            <Link to="/cart">
              <Button text="Ver el carrito" show="bigger"></Button>
            </Link>
          )}
        </div>
      )}
      <Link to="/">
        <Button text="Volver a navegación" show="smaller" />
      </Link>
    </div>
  );
}

export default ItemDetail;
