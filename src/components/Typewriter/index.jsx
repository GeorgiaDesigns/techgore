import React from "react";
import * as S from "./styles";

const TypeWriter = ({ title, text }) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Text>{text}</S.Text>
    </S.Wrapper>
  );
};

export default TypeWriter;
