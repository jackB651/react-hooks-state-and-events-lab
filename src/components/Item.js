import React, {useState} from "react";

function Item({ name, category }) {

  const [cart, setCart] = useState(false)
  
  const inCart = cart ? "Remove from cart" : "Add to Cart"

  
  function carted(){
    setCart((cart)=>!cart)
  }
  

  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={carted}>{inCart}</button>
    </li>
  );
}

export default Item;
