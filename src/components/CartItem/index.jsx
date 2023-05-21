import React from "react";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";

import * as S from "./styles";

const CartItem = ({ item, clearItem, addItem, removeItem }) => (
  <S.CartItem>
    {/* <img src={item.url} alt="cart item" /> */}
    <div className="item-details">
      <span className="name">{item.name}</span>
      <span className="price">
        <b> {item.quantity}</b> x ${item.price}
      </span>
    </div>
    <S.QtyControler>
      <div className="arrow" onClick={() => removeItem(item)}>
        -
      </div>
      <span className="value">{item.quantity}</span>
      <div className="arrow" onClick={() => addItem(item)}>
        +
      </div>
    </S.QtyControler>

    <S.TrashButton onClick={() => clearItem(item)}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15 1.66675H25C26.8409 1.66675 28.3333 3.15913 28.3333 5.00008V6.66675H33.3333C35.1743 6.66675 36.6666 8.15913 36.6666 10.0001V13.3334C36.6666 15.1744 35.1743 16.6667 33.3333 16.6667H33.1998L31.6666 35.0001C31.6666 36.841 30.1743 38.3334 28.3333 38.3334H11.6666C9.8257 38.3334 8.33331 36.841 8.33907 35.1385L6.79976 16.6667H6.66665C4.8257 16.6667 3.33331 15.1744 3.33331 13.3334V10.0001C3.33331 8.15913 4.8257 6.66675 6.66665 6.66675H11.6666V5.00008C11.6666 3.15913 13.159 1.66675 15 1.66675ZM6.66665 10.0001H11.6666H28.3333H33.3333V13.3334H6.66665V10.0001ZM11.6666 35.0001L10.1441 16.6667H29.8553L28.3391 34.8617L28.3333 35.0001H11.6666ZM25 5.00008V6.66675H15V5.00008H25ZM13.8215 21.1786L16.1785 18.8216L20 22.6431L23.8215 18.8216L26.1785 21.1786L22.357 25.0001L26.1785 28.8216L23.8215 31.1786L20 27.3571L16.1785 31.1786L13.8215 28.8216L17.643 25.0001L13.8215 21.1786Z"
          fill="#131313"
        />
      </svg>
    </S.TrashButton>
  </S.CartItem>
);

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
