import React from "react";
import Page from "../../components/PageTemplate";
import { Main } from "../Main";
import { Experience } from "../../components/Experience";
import * as S from "./styles";

const Home = () => {
  return (
    <Page
      sections={[
        <section key={1} id="section 1" name="Home">
          <Main />
        </section>,
        <section key={2} id="section 2">
          Section 2 content
        </section>,
        <section key={3} id="section 3">
          Section 3 content
        </section>,
        <section key={4} id="section 4" name="Collections" horizontal="true">
          <Experience />
        </section>,
      ]}
    />
  );
};

export default Home;
