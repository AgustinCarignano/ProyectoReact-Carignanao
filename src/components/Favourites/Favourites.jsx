import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { favContext } from "../../Contexts/favContext";
import Button from "../Button/Button";
import ItemList from "../ItemList/ItemList";
import "./Favourite.css";

function Favourites() {
  const { favList } = useContext(favContext);

  if (favList.length === 0) {
    return (
      <div className="emptyFavPage">
        <h2>No hay productos en la lista de favoritos</h2>
        <p>Navega a la página principal para armar tu compra</p>
        <Link to="/">
          <Button text="Bucar productos" />
        </Link>
      </div>
    );
  } else {
    return <ItemList products={favList} />;
  }
}

export default Favourites;
