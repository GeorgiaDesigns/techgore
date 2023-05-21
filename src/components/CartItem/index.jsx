import React from "react";

import "./styles.js";

const CartItem = ({ item: { url, price, name, stock } }) => (
  <div className="cart-item">
    <img src={url} alt="cart item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {stock} x ${price}
      </span>
    </div>
  </div>
);

export default CartItem;
