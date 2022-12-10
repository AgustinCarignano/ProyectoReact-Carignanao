import React from "react";
import { useParams } from "react-router-dom";
import Order from "./Order";
import OrderList from "./OrderList";

function OrderContainer() {
  const { orderParam } = useParams();
  console.log(orderParam);

  if (orderParam.includes("@")) {
    return <OrderList buyer={orderParam} />;
  } else {
    return <Order orderId={orderParam} />;
  }
}

export default OrderContainer;
