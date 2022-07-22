import React, {useState} from "react";

function Item({ name, category }) {

  const [cart, setCart] = useState(false)
  
  const inCart = cart ? "Remove from cart" : "Add to Cart"
  const cartClass = cart ? "in-cart":""
  
  function carted(){
    setCart((cart)=>!cart)
  }
  

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={carted}>{inCart}</button>
    </li>
  );
}

export default Item;
