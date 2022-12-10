import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/firebaseService";
import ItemDetail from "./ItemDetail";
import Loader from "../Loader/Loader";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  //Obtención de un item de la colección de productos
  async function getItem() {
    let respuesta = await getProduct(id, "data");
    setProduct(respuesta);
  }

  useEffect(() => {
    getItem();
  }, [id]);

  return product.length === 0 ? <Loader /> : <ItemDetail product={product} />;
}

export default ItemDetailContainer;
