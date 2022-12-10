import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getOrderByBuyer } from "../../services/firebaseService";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";

function OrderList(props) {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(false);
  let i = 0;

  async function getOrders() {
    let respuesta = await getOrderByBuyer(props.buyer);
    respuesta ? setOrders(respuesta) : setError(true);
  }

  useEffect(() => {
    getOrders();
  }, [props.buyer, error]);

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

  return orders.length === 0 ? (
    <Loader />
  ) : (
    <div className="ordersList">
      <h3>
        Lista de pedidos de {orders[0].buyer.name} {orders[0].buyer.surname}
      </h3>
      {orders.map((item) => {
        i++;
        return (
          <div key={item.id} className="orderList-item">
            <p>
              <b>{i})</b> ID pedido: {item.id}
            </p>
            <Link to={`/pedidos/${item.id}`}>
              <Button text="Ver pedido" show="smaller" />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default OrderList;
