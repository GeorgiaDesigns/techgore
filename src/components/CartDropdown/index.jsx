import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useLocation } from "wouter";

import CartItem from "../CartItem";
import MenuButton from "../MenuButton";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import "./styles";

const CartDropdown = ({ cartItems }) => {
  const [location, setLocation] = useLocation();
  console.log(cartItems);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <MenuButton
        onClick={() => {
          setLocation("/");
        }}
        order={3}
      >
        GO TO CHECKOUT
      </MenuButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
