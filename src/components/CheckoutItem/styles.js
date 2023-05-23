import styled, { css } from "styled-components";

export const CheckoutItem = styled.div`
  width: 100%;
  display: flex;
    width: 80vw;
    align-items: center;
    color: #ddd;
    justify-content: space-around;
  padding: 1rem;
box-shadow: inset 0px 2px 10px rgba(0, 0, 0, 0.9);
border-radius: 15px;

   .item-details {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 20px;
`;

export const Img = styled.div`
  max-width: 10rem;
`;

export const QtyControler = styled.span`
  display: flex;
  gap: 0.2rem;
  font-size: 20px;
  padding-right: 1.5rem;

  div {
    cursor: pointer;
  }
`;
