import React from 'react'
import Button from '../Button/Button'
import ItemCount from '../ItemCount/ItemCount'
import "./ItemDetail.css"
import { Link } from "react-router-dom"

function ItemDetail({product}) {
  return (
    <div className='itemDetail'>
      <div className="itemDetail-img">
        <img src={product.imgurl} alt={product.title} className="itemDetail-img" />
      </div>
        <h2>{product.title}</h2>
        <h5>{product.subTitle}</h5>
        <p><b>Descripcion del producto:</b><br/>{product.description}</p>
        <div className='itemDetail-addToCart'>
          <h5>Precio: ${product.price}</h5>
          <ItemCount init={1} stock={product.stock} />
        </div>
        <span className='description-stock'>Stock disponible: {product.stock}</span>
        <Link to="/">
          <Button text="Menú principal" />
        </Link>
    </div>
  )
}

export default ItemDetail