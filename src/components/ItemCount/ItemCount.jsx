import {useState} from 'react';
import Button from '../Button/Button';
import "./ItemCount.css";

function ItemCount(props) {
    const [number, setNumber] = useState(props.init)

    function handleClickRestar() {
        number>1 && setNumber (number - 1);
    }
    function handleClickSumar() {
        number<props.stock && setNumber (number + 1);
    }

  return (
    <div className='buy'>
        <div className='buy-counter'>
            <Button text="-" onClick={handleClickRestar} />
            <span className='counter-number'>{number}</span>
            <Button text="+" onClick={handleClickSumar} />
        </div>
        <Button text="Agregar al carrito"/>
    </div>
  )
}

export default ItemCount