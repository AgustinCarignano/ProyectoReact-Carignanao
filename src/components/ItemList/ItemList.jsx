import React from "react";
import Item from "./Item";

function ItemList({ products, banner }) {
  return (
    <div>
      {banner && (
        <div className="banner">
          <h1>Tyrion, Drink Shop</h1>
          <h3>Tus bebidas preferidas, a precios increíbles.</h3>
        </div>
      )}
      <div className="ItemList">
        {products.map((product) => {
          return <Item key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}

export default ItemList;
