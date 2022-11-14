import React from 'react'
import Item from './Item'
import "./ItemList.css"

function ItemList({products}) {
  return (
    <div className='ItemList'>
        {products.map((product)=>{
            return(
                <Item
                key={product.id}
                product={product}
                />
            );
        })}
    </div>
  );
}

export default ItemList