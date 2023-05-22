import React from "react";
import Page from "../../components/PageTemplate";
import { Main } from "../Main";
import { Experience } from "../../components/Experience";

const Home = () => {
  return (
    <Page
      sections={[
        <section id="section 1" name="Home">
          <Main />
        </section>,
        <section key={2} id="section 2">
          Section 2 content
        </section>,
        <section key={3} id="section 3" name="Collections" horizontal="true">
          <Experience />
        </section>,
        <section
          key={4}
          id="section 4"
          horizontal="true"
          className="horizontal"
        >
          Section 3 content
        </section>,
      ]}
    />
  );
};

export default Home;
