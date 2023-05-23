import styled, { css } from "styled-components";

export const Container = styled.div`
  position: absolute;
  right: 2rem;
  top: 2rem;
  min-width: 22rem;
  max-height: 50rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-radius: 15px;
  font-family: monocode;

  padding: 2rem;

  box-shadow: -4px 5px 10px 0px #eb21be;
  align-items: flex-start;

  ::-webkit-scrollbar {
    width: 0;
    left: 0;
  }
`;
