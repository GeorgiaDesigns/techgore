// .cart-dropdown {

//   .empty-message{
//     font-size: 18px;
//     margin: 50px auto;
//   }

//   .cart-items {
//     height: 240px;
//     display: flex;
//     flex-direction: column;
//     overflow: scroll;
//   }

//   button {
//     margin-top: auto;
//   }
// }

import styled, { css } from "styled-components";

const wrapperModifiers = {
  open: () => css`
    opacity: 1;
    pointer-events: auto;
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
  `,
};

export const Wrapper = styled.div`
  ${({ isOpen }) => css`
    position: relative;

    ${CartDropdown} {
      ${isOpen && wrapperModifiers.open()}
      ${!isOpen && wrapperModifiers.close()}
    }
  `}
`;

export const CartDropdown = styled.div`
  position: absolute;
  min-width: 22rem;
  max-height: 420px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-radius: 15px;

  padding: 2rem 0.2rem;

  background-color: #dddddd;
  right: -2rem;
  z-index: 5;
  box-shadow: -4px 5px 10px 0px rgba(70, 246, 8, 0.72);
  align-items: center;

  ::-webkit-scrollbar {
    width: 0;
    left: 0;
  }
`;

export const List = styled.div`
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;
