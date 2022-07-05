import React, {useState} from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false)

  const cartCss = inCart ? "in-cart" : ""
  const buttonText = inCart ? "Remove from Cart" : "Add to Cart"

  return (
    <li className={cartCss}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart ? "remove" : "add"} onClick={() => setInCart(!inCart)}>{buttonText}</button>
    </li>
  );
}

export default Item;
