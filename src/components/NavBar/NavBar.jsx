import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { searchContext } from "../../Contexts/searchContext";
import CartWidget from "./CartWidget";
import "./NavBar.css";

function NavBar() {
  const [showCategoryOptions, setShowCategoryOptions] = useState(false);
  const { handleOnSubmit, handleOnChange } = useContext(searchContext);
  const Navigate = useNavigate();

  function handleLocalOnSubmit(e) {
    e.preventDefault();
    handleOnSubmit();
    e.target[0].value = "";
    Navigate("/categorias/busqueda");
  }

  function toggleCategoryOptions() {
    setShowCategoryOptions(!showCategoryOptions);
  }
  let classNameCategoryOptions = showCategoryOptions
    ? "submenu showSubMenu"
    : "submenu";
  let classNameCategoryArrow = showCategoryOptions
    ? "arrowUp scaleItem"
    : "arrowDown scaleItem";

  return (
    <header className="header">
      <nav className="navBar container">
        <div className="navBar-brand">
          <Link to="/">
            <img src="/images/brand.png" alt="" />
          </Link>
        </div>
        <ul className="navBar-list">
          <li className="scaleItem">
            <Link to="categorias/ofertas">
              <b>Ofertas!</b>
            </Link>
          </li>
          <li className="scaleItem">
            <Link to="/favoritos">Favoritos</Link>
          </li>
          <li className="categorias scaleItem" onClick={toggleCategoryOptions}>
            Categorias{" "}
            <img
              src="https://www.svgrepo.com/show/80156/down-arrow.svg"
              className={classNameCategoryArrow}
            ></img>
            <ul className={classNameCategoryOptions}>
              <li>
                <Link to="/">Todo</Link>
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
          </li>
          <li>
            <form className="list-search" onSubmit={handleLocalOnSubmit}>
              <img
                src="https://www.svgrepo.com/show/19027/magnifying-glass.svg"
                alt=""
              />
              <input
                type="text"
                placeholder="Buscar..."
                onChange={handleOnChange}
              />
            </form>
          </li>
          <li className="scaleItem">
            <Link to="/tracing">Seguimiento</Link>
          </li>
        </ul>
        <div className="navBar-cart">
          <CartWidget />
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
