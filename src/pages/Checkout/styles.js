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
`;

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;

  h1 {
    -webkit-text-stroke-width: 4.5px;
    -webkit-text-stroke-color: #eb21be;
    font-family: Airnt;
    font-size: 5rem;
    margin-top: 2rem;
    color: transparent;
  }
`;

export const Total = styled.div`
  width: 100%;
  padding-top: 2rem;
  text-align: right;

  span {
    white-space: nowrap;
    margin: 0;
    letter-spacing: 0.15em;
    font-size: 1.5rem;

    font-family: "febre";

    color: limegreen;
    text-shadow: 0px 0px 10px limegreen;
  }
`;

export const Container = styled.div`
  right: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-radius: 15px;
  font-family: monocode;
  max-height: 29rem;
  overflow-y: scroll;
  padding: 2rem;

  box-shadow: -4px 5px 10px 0px #eb21be;
  align-items: flex-end;

  ::-webkit-scrollbar {
    width: 0;
    left: 0;
  }
`;
