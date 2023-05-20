import React from "react";
import * as S from "./styles";

const Background = () => (
  <>
    <S.FloatingBackgroundContainer>
      <S.X>X</S.X>
      <S.X>X</S.X>
      <S.X>X</S.X>
      <S.X>X</S.X>
      <S.X>X</S.X>
      <S.X>X</S.X>
      <S.X>X</S.X>
      <S.X>X</S.X>
    </S.FloatingBackgroundContainer>
    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 330">
        <path
          id="MyPath"
          fill="#894589"
          fillOpacity="1"
          d="M0,32L48,26.7C96,21,192,11,288,42.7C384,75,480,149,576,202.7C672,256,768,288,864,282.7C960,277,1056,235,1152,202.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
            <feColorMatrix
              in="name"
              mode="matrix"
              values="1 0 0 0 0
            0 1 0 0 0
            0 0 1 0 0
            0 0 0 30 -15"
            />
            <feBlend in="SourceGraphic" />
          </filter>
        </defs>
        <text>
          <textPath href="#MyPath"></textPath>
        </text>
      </svg> */}
  </>
);

export default Background;
