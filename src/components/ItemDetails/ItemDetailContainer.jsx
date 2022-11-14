import React, { useEffect, useState } from 'react';
import { getProduct } from '../../services/mockService';
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
    const [product, setProduct]=useState([]);
    const {id} = useParams();

    async function getItem() {
        let respuesta = await getProduct(id);
        setProduct(respuesta);
    }

    useEffect( ()=> {
        getItem();
    },[id])

  return (
    <ItemDetail product={product} />
  )
}

export default ItemDetailContainer