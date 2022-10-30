import React from 'react'
import CartWidget from './CartWidget'
import './NavBar.css'

function NavBar() {
  return (
    <header className="header">
      <nav className='navBar container'>
        <div className='navBar-brand'>
          <a href="/">
            <img src="/images/brand.png" alt="" />
          </a>
        </div>
        <ul className='navBar-list'>
          <li>
            <a href="/"><b>Todo</b></a>
          </li>
          <li>
            <a href="/">Bebidas blancas</a>
          </li>
          <li>
            <a href="/">Vinos</a>
          </li>
          <li>
            <a href="/">Cervezas</a>
          </li>
          <li>
            <a href="/">Aperitivos</a>
          </li>
        </ul>
        <div className='navBar-cart'>
          <CartWidget class="widget" />
        </div>
      </nav>
    </header>
  )
}

export default NavBar