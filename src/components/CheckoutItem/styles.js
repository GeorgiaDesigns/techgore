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

export const TrashButton = styled.button``;

export const QtyControler = styled.span`
  display: flex;
  gap: 0.2rem;
  font-size: 20px;
  padding-right: 1.5rem;

  div {
    cursor: pointer;
  }
`;
