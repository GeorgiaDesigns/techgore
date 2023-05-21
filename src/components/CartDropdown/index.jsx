import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useLocation } from "wouter";

import CartItem from "../CartItem";
import MenuButton from "../MenuButton";

import { selectCartItems } from "../../redux/cart/cart.selectors";

import * as S from "./styles";

const CartDropdown = ({ cartItems }) => {
  const [location, setLocation] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   const handler = () => {
  //     if (isOpen) setIsOpen(false);
  //   };
  //   document.addEventListener("click", handler);
  //   return () => {
  //     document.removeEventListener("click", handler);
  //   };
  // }, [isOpen]);

  return (
    <S.Wrapper isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <button>
        <svg
          className="shopping-cart"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              id="icon"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.07125 4.00254C5.89365 4.00216 5.72244 4.02226 5.55976 4.06048C5.33674 3.56893 5.04216 3.12794 4.70711 2.79289C4.13843 2.22422 3.24155 2 2 2V4C2.75845 4 3.1949 4.10911 3.29289 4.20711C3.67086 4.58508 4 5.35306 4 6L4.01005 6.14142L4.98992 13.0005C3.35036 13.0856 2.0802 14.3588 2.00123 15.9504L2 17C2.09682 18.6439 3.36275 19.9085 4.94324 19.9984L5.17026 19.9987C5.58174 21.1646 6.69331 22 8 22C9.30622 22 10.4175 21.1652 10.8293 20H13.1707C13.5825 21.1652 14.6938 22 16 22C17.6569 22 19 20.6569 19 19C19 17.3431 17.6569 16 16 16C14.6938 16 13.5825 16.8348 13.1707 18H10.8293C10.4175 16.8348 9.30622 16 8 16C6.69378 16 5.58254 16.8348 5.17071 18H5C4.49001 17.9694 4.03254 17.5124 3.99821 16.9401L4 16C4.02697 15.4813 4.48131 15.027 5.04955 14.9988L7.02369 14.9993L7.038 15H17.1169L17.2645 14.9532C18.0227 14.7126 18.6296 14.1416 18.917 13.4025L19.0224 13.194L19.3647 12.5159C19.7188 11.8139 20.0729 11.1108 20.418 10.4238C21.2632 8.74107 21.7948 7.67166 21.9125 7.40906C22.5171 6.06045 21.2924 5.02246 20.0407 5.00036L6.07125 4.00254ZM16.7694 13H7.11287C7.04866 12.9822 6.99973 12.9278 6.99015 12.86L6.01026 6.00073L19.8934 6.99493C19.6505 7.49032 19.2089 8.37516 18.6308 9.52609L18.6163 9.55493C18.2863 10.2119 17.9326 10.9141 17.579 11.6151L17.2371 12.2923L17.1076 12.5488L17.0588 12.6622C17.0065 12.8078 16.9028 12.9274 16.7694 13ZM16 20C16.5523 20 17 19.5523 17 19C17 18.4477 16.5523 18 16 18C15.4477 18 15 18.4477 15 19C15 19.5523 15.4477 20 16 20ZM9 19C9 19.5523 8.55228 20 8 20C7.44772 20 7 19.5523 7 19C7 18.4477 7.44772 18 8 18C8.55228 18 9 18.4477 9 19Z"
              fill="#EB21BE"
            />
          </g>
        </svg>
      </button>
      <S.CartDropdown aria-hidden={!isOpen}>
        {cartItems.length ? (
          <S.List>
            {cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))}
            <MenuButton
              onClick={() => {
                setLocation("/checkout");
              }}
              order={3}
              text="CHECKOUT"
            />
          </S.List>
        ) : (
          <span
            className="empty-message"
            style={{
              fontFamily: "febre",
              color: "limegreen",
              fontSize: "1.5rem",
            }}
          >
            Your cart is empty
          </span>
        )}
      </S.CartDropdown>
    </S.Wrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
