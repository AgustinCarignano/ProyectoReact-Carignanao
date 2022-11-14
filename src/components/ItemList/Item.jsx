import React from 'react'
import Button from '../Button/Button'
import "./Item.css"
import { Link } from "react-router-dom";

function Item({product}) {
  const urlDetail= `/productos/${product.id}`;

  return (
    <div className='card'>
        <img src={product.imgurl} alt={product.title} className='card-img' />
        <div className='card-details'>
          <h3>{product.title}</h3>
          <h6>{product.subTitle}</h6>
          <p>Precio: ${product.price}</p>
        <Link to={urlDetail}>
          <Button text="Ver más"/>
        </Link>
        </div>
    </div>
  )
}

export default Item