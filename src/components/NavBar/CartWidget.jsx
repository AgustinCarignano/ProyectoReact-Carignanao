import React from 'react'
import "./NavBar.css"

function CartWidget(props) {
  return (
    <div>
        <a href="/">
          <img src="/images/cart.png" alt="" className={props.class} />
        </a>
    </div>
  )
}

export default CartWidget