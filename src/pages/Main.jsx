import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import Typewriter from "../components/Typewriter";
import { selectCartItems } from "../redux/cart/cart.selectors";

const Container = styled.div`
  position: relative;
  height: 100vh;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 150px;
  font-family: "airnt";
  display: flex;
  justify-content: center;

  h1:nth-child(2) {
    position: absolute;
    top: 20vh;
    &:hover {
      filter: drop-shadow(-4px 5px 10px rgba(70, 247, 8, 0.72));
      cursor: default;
    }

    background: linear-gradient(180deg, #8f379d 0%, #eb21be 60%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h1:nth-child(1) {
    position: absolute;
    top: 20vh;

    transform: translate(5px, 35px);
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: #e2e2e2;
    color: transparent;
  }
`;

export const Main = () => {
  return (
    <Container>
      <div>
        <Typewriter
          title="The future is upon us"
          text="Not what we dreamed of? Killer Machines,Cyborg Assasins,Neuro Hacking,Quantum Control.We got what we asked for in request for advancement..."
        />
      </div>
      <Title>
        <h1>HITCHKA</h1>
        <h1>HITCHKA</h1>
      </Title>

      {/* <Lady
        ref={scrollContainerRef}
        src="/img/introLady.png"
        style={{ transform: `translateY(${offsetY * 0.8}px)` }}
      /> */}
    </Container>
  );
};
