import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import Input from "../Checkout/Input";
import "./Tracing.css";

function Tracing() {
  const [IDCompra, setIDCompra] = useState("");
  const Navigate = useNavigate();

  function handleOnChange(e) {
    setIDCompra(e.target.value);
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    Navigate(`/pedidos/${IDCompra}`);
  }

  return (
    <div className="tracing">
      <h3>Verificar el estado de una compra</h3>
      <form onSubmit={handleOnSubmit} className="tracing-form">
        <Input
          inputName="IDCompra"
          inputType="text"
          label="Ingese el ID de la compra"
          onChange={handleOnChange}
        />
        <div className="form-buttons">
          <Button type="input" text="Buscar" />
        </div>
      </form>
    </div>
  );
}

export default Tracing;
