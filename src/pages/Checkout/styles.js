import styled, { css } from "styled-components";

export const CheckoutItem = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
    min-width: 280px;
    align-items: center;
    
    justify-content: space-between;
  padding: 1rem;
background: #D9D9D9;
box-shadow: inset 0px 2px 10px rgba(0, 0, 0, 0.25);
border-radius: 15px;
  img {
    width: 30%;
  } 
   .item-details {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 20px;

    .name {
      font-size: 16px;
      white-space: nowrap;
    }
`;

export const ProductHeader = styled.h1``;

export const QtyControler = styled.span`
  display: flex;
  gap: 0.2rem;
  font-size: 20px;
  padding-right: 1.5rem;

  div {
    cursor: pointer;
  }
`;

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-radius: 15px;

  padding: 2rem 0.2rem;

  background-color: #131313;
  right: -2rem;
  z-index: 5;
  box-shadow: inset -4px 5px 10px 0px rgba(70, 246, 8, 0.72);
  align-items: center;
`;
