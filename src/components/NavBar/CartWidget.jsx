import React from 'react'
import "./NavBar.css"
import { Link } from "react-router-dom"

function CartWidget(props) {
  return (
    <div className='widget'>
        <Link to="/cart">
          <img src="/images/cart.png" alt="" className="widget-img" />
        </Link>
          <p className="widget-total">{props.total}</p>
    </div>
  )
}

export default CartWidget