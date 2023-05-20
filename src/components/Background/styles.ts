import styled, { css } from "styled-components";

const generateStyles = (numChildren) => {
  let styles = "";
  for (let i = 1; i <= numChildren; i++) {
    const left = `${Math.floor(Math.random() * 91 - 45) + 50}%`; // Random left position between 20% and 80%
    const bottom = `${Math.floor(Math.random() * 101 - 55) + 50}%`; // Random left position between 20% and 80%
    const animationDelay = `${(i - 1) * 5}s`; // Random animation delay between 0s and 4s
    styles += `
      &:nth-child(${i}) {
        font-size: 45px;
        left:  ${left};
        animation-delay: ${animationDelay};
      }
    `;
  }
  return css`
    ${styles}
  `;
};

export const FloatingBackgroundContainer = styled.ul`
  width: 100%;
  position: fixed;
`;

export const X = styled.li`
  position: absolute;
  font-family: "Airnt";
  font-style: normal;
  color: transparent;

  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #e2e2e2;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  animation: circle 20s infinite;
  transition-timing-function: linear;

  ${generateStyles(8)}

  @keyframes circle {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      -webkit-transform: translateY(-110vh) rotate(360deg);
      transform: translateY(-110vh) rotate(360deg);
    }
  }
`;
