import React, { useEffect, useState }  from 'react'
import ItemList from './ItemList'
import getProducts from '../../services/mockService'
import { useParams } from 'react-router-dom'

function ItemListContainer(props) {
  const [products, setProducts] = useState([]);
    const {cat} = useParams();

    async function getItems() {
        let respuesta = await getProducts(cat);
        setProducts(respuesta);
    }

    useEffect(()=>{
        getItems();
    }, [cat]);

  return (
    <div>
      <h2 style={{color: "white"}}>{props.greeting}</h2>
      <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer