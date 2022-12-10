import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProduct } from "../../services/firebaseService";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";
import "./Order.css";

function Order(props) {
  const [ordered, setOrdered] = useState([]);
  const [error, setError] = useState(false);

  //Función para obtener los datos de una orden realiada.
  async function followOrder() {
    let respuesta = await getProduct(props.orderId, "orders");
    respuesta ? setOrdered(respuesta) : setError(true);
  }

  useEffect(() => {
    followOrder();
  }, [props.orderId, error]);

  if (error) {
    return (
      <div className="emptyPage">
        <h2>Opss! 😟</h2>
        <p>Hubo un error al intentar obtener datos de la orden.</p>
        <p>Vuelve a intentarlo</p>
        <Link to="/tracing">
          <Button text="Ir a seguimiento" />
        </Link>
      </div>
    );
  }

  return ordered.length === 0 ? (
    <Loader />
  ) : (
    <div className="order">
      <h2 className="order-title">
        ID de seguimiento: <small>{props.orderId}</small>
      </h2>
      <div className="order-detail">
        <div>
          <h4>Datos del comprador</h4>
          <p>Nombre: {ordered.buyer.name}</p>
          <p>Apellido: {ordered.buyer.surname}</p>
          <p>Email: {ordered.buyer.email}</p>
          <p>
            Fecha de la compra: {ordered.date.toDate().toLocaleDateString()}
          </p>
        </div>
        <div>
          <h4>Detalle del pedido</h4>
          {ordered.items.map((item) => {
            return (
              <p key={item.title}>
                {item.title} ({item.subTitle}) x{item.cantidad}
              </p>
            );
          })}
          <p>Total de la compra: ${ordered.total}</p>
        </div>
        <div>
          <h4>Estado</h4>
          <p>En proceso</p>
        </div>
      </div>
      <div className="order-buttons">
        <Link to="/tracing">
          <Button text="Seguimiento" />
        </Link>
        <Link to="/">
          <Button text="Home" />
        </Link>
      </div>
    </div>
  );
}

export default Order;
