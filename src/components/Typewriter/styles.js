import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 30rem;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  position: absolute;
  bottom: 0;
  left: 10%;
`;

export const Title = styled.h2`
  overflow: hidden;
  border-right: 0.15em solid orange;
  white-space: nowrap;
  margin: 0;
  letter-spacing: 0.15em;
  font-size: 1.5rem;

  font-family: "febre";

  color: limegreen;
  text-shadow: 0px 0px 10px limegreen;

  animation: typing 4s steps(44), blink-caret 1s steps(44) infinite;

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: limegreen;
    }
  }
`;

export const Text = styled.p`
  overflow: hidden;
  font-size: 1rem;

  //   border-right: 0.15em solid limegreen;
  margin: 0 auto;
  //   animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
  color: #ddd;

  font-family: "monocode";
`;
