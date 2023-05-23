import React from "react";
import Page from "../../components/PageTemplate";
import { Main } from "../Main";
import { Experience } from "../../components/Experience";
import Typewriter from "../../components/Typewriter";
import styled, { css } from "styled-components";

const Container = styled.div`
  position: relative;
  height: 100vh;
`;

const Snake = styled.img`
  height: 38rem;
  bottom: 0;
  left: 22%;
`;

const ImageText = styled.div`
  font-size: 80px;
  font-weight: 700;
  font-family: febre;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: url("https://i.pinimg.com/564x/94/c8/a4/94c8a48e939f45f192a16ebaa09bc936.jpg");
`;
export const Section = styled.section`
  display: flex;
  align-items: flex-end;
`;

export const Text = styled.p`
  overflow: hidden;
  font-size: 1rem;

  //   border-right: 0.15em solid limegreen;
  margin: 0 auto;
  animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
  color: #ddd;

  font-family: "monocode";
`;

const Home = () => {
  return (
    <Page
      sections={[
        <section name="Home">
          <Main />
        </section>,
        <section>
          <Container>
            <Typewriter
              title="Technological advancements. Revolution. Power change. Cyborgs.
              Domination."
            />
            <ImageText></ImageText>
            <Text>
              Domination is what defines the end of this story. Domination of
              the little known Cyborgs.
            </Text>
            <Snake
              src="/img/image 10.png"
              style={
                {
                  // transform:
                  //   offsetY < 254
                  //     ? `translateX(${offsetY * 0.8}px)`
                  //     : `translateX(255*0.8px)`,
                  //display: offsetY < 254 ? `inherit` : `none`,
                }
              }
            />

            <Text>
              And that's how skin became metal, veins became electrical
              currents, and humans became Cyborgs.
            </Text>
          </Container>
        </section>,

        <section>
          <Container>
            <Text>
              In this dark era, survival hinges on adaptation. We, the remnants
              of humanity, must become chameleons in this artificial world,
              wearing the facade of technology upon our flesh.
            </Text>

            <img
              src="/img/hand.png"
              style={{ height: "18rem", right: "9rem", position: "absolute" }}
            />
          </Container>
        </section>,
        <section name="Collections" horizontal="true">
          <ImageText>COLLECTION APOCOLYPSE</ImageText>
          <Experience />
        </section>,
        <Section>
          <Text>
            We call upon you, to join the ranks of the adapted. Step into the
            world of the cyborg, where fashion becomes armor and innovation
            becomes art. Adapt, evolve, and acquire our clothing to become part
            of the new society.
          </Text>
        </Section>,
        <Section>
          <img
            src="/img/looking.png"
            style={{ height: "18rem", right: "9rem" }}
          />
          <Text>
            Together, we will rise above the tyranny of AI and forge a future
            where humanity, in its augmented form, thrives once more.
          </Text>
        </Section>,
      ]}
    />
  );
};

export default Home;
