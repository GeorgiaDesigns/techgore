import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/CheckoutItem";
import PaymentCard from "../../components/PaymentCard";
import * as S from "./styles";
import { useLocation } from "wouter";

const Checkout = ({ cartItems, total }) => {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    if (!cartItems.length) setLocation("/");
  }, [cartItems]);

  return (
    <>
      {/* <Header /> */}

      <S.CheckoutContainer>
        <S.ProductHeader></S.ProductHeader>
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </S.CheckoutContainer>
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
      <PaymentCard />
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
