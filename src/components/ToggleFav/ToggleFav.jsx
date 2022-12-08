import React, { useContext } from "react";
import { favContext } from "../../Contexts/favContext";

function ToggleFav({ product }) {
  const { putInFav, favList } = useContext(favContext);
  const buttonActive = favList.some((el) => el.id === product.id);

  let className = buttonActive ? "favButton favButtonActive" : "favButton";

  return (
    <span className={className} onClick={() => putInFav(product)}>
      ❤
    </span>
  );
}

export default ToggleFav;
