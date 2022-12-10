import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import Input from "../Checkout/Input";
import "./Tracing.css";

function Tracing() {
  const [IDCompra, setIDCompra] = useState("");
  const [emailBuyer, setEmailBuyer] = useState("");
  const Navigate = useNavigate();

  //Guarda los valores del input en un estado
  function handleOnChangeInID(e) {
    setIDCompra(e.target.value);
  }
  function handleOnChangeInBuyer(e) {
    setEmailBuyer(e.target.value);
  }

  //Redirije a la ruta que muestra los datos de la orden buscada
  function handleOnSubmit(e) {
    e.preventDefault();
    if (IDCompra !== "") {
      Navigate(`/pedidos/${IDCompra}`);
    } else {
      Navigate(`/pedidos/${emailBuyer}`);
    }
  }

  let disabled = (IDCompra === "") & (emailBuyer === "");

  return (
    <div className="tracing">
      <h3>Verificar el estado de una compra</h3>
      <form onSubmit={handleOnSubmit} className="tracing-form">
        <h5>Búsqueda de una orden con su ID</h5>
        <Input
          inputName="IDCompra"
          inputType="text"
          label="Ingese el ID de la compra"
          onChange={handleOnChangeInID}
          disabled={emailBuyer.length !== 0}
        />
        <h5>Búsqueda de las ordenes del comprador</h5>
        <Input
          inputName="emailBuyer"
          inputType="email"
          label="Ingrese su dirección de correo"
          onChange={handleOnChangeInBuyer}
          disabled={IDCompra.length !== 0}
        />
        <div className="form-buttons">
          <Button disabled={disabled} type="input" text="Buscar" />
        </div>
      </form>
    </div>
  );
}

export default Tracing;
