import styled, { css } from "styled-components";

export const Container = styled.div`
  min-width: 22rem;
  max-height: 50rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.5rem;
  border-radius: 15px;
  font-family: monocode;
  margin: 0 3rem;
  padding: 2rem;

  box-shadow: -4px 5px 10px 0px #eb21be;
  align-items: flex-start;

  ::-webkit-scrollbar {
    width: 0;
    left: 0;
  }
`;

export const Face = styled.img`
  ${() => css`
    border-radius: 50%;
    width: 10rem;
    filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/></filter></svg>#grayscale"); /* Firefox 3.5+ */
    filter: gray; /* IE6-9 */
    -webkit-filter: grayscale(100%); /* Chrome 19+ & Safari 6+ */
    transition: filter 1s;

    &:hover {
      filter: none;
      -webkit-filter: grayscale(0%);

      ${Names} {
        visibility: visible;
        opacity: 1;
      }
    }
  `}
`;

export const Names = styled.p`
  background: rgba(29, 106, 154, 0.72);
  color: #fff;
  visibility: hidden;
  opacity: 0;

  /* transition effect. not necessary */
  transition: opacity 0.2s, visibility 0.2s;
`;
