import React from 'react'
import CartWidget from './CartWidget'
import './NavBar.css'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <header className="header">
      <nav className='navBar container'>
        <div className='navBar-brand'>
          <Link to="/">
            <img src="/images/brand.png" alt="" />
          </Link>
        </div>
        <ul className='navBar-list'>
          <li>
            <Link to="/"><b>Todo</b></Link>
          </li>
          <li>
            <Link to="/categorias/espirituosas">Espirituosas</Link>
          </li>
          <li>
            <Link to="/categorias/vinos">Vinos</Link>
          </li>
          <li>
            <Link to="/categorias/cervezas">Cervezas</Link>
          </li>
          <li>
            <Link to="/categorias/aperitivos">Aperitivos</Link>
          </li>
        </ul>
        <div className='navBar-cart'>
          <CartWidget total={8} />
        </div>
      </nav>
    </header>
  )
}

export default NavBar