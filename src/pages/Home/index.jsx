import React from "react";
import Page from "../../components/PageTemplate";
import { Main } from "../Main";
import { Experience } from "../../components/Experience";
import Team from "../../components/Team";
import styled, { css } from "styled-components";

const Container = styled.div`
  position: relative;
  height: 80vh;
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
  text-align: right;
  padding: 0 3rem;
  background-image: url("https://i.pinimg.com/564x/85/77/3e/85773eb0756bca6b4b15eab02895a7aa.jpg");
`;
export const Section = styled.section`
  display: flex;
  align-items: flex-end;
`;

export const TypeWriter = styled.p`
  overflow: hidden;
  letter-spacing: 0.15em;
  font-size: 1.5rem;
  text-align: center;
  top: 50%;
  position: relative;
  font-family: "febre";

  color: limegreen;
  text-shadow: 0px 0px 10px limegreen;

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;

export const Text = styled.p`
  overflow: hidden;
  font-size: 1rem;
  width: 30rem;
  padding: 3rem;
  color: #ddd;
  font-family: "monocode";

  &:nth-of-type() {
  }
`;

export const TextParagraph = styled.p`
  overflow: hidden;
  font-size: 1rem;
  width: 80vw;
  color: #ddd;
  font-family: "monocode";
  text-align: center;
`;

const Home = () => {
  return (
    <Page
      sections={[
        <section name="Home">
          <Main />
        </section>,
        <section style={{ height: "100vh" }}>
          <Container>
            <TypeWriter>
              Technological advancements. Revolution. Power change.
              <br /> Cyborgs. Domination.
            </TypeWriter>
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
              In this dark era, survival hinges on adaptation. We, the remnants
              of humanity, must become chameleons in this artificial world,
              wearing the facade of technology upon our flesh.
            </Text>
          </Container>
        </section>,
        <section name="Collections" horizontal="true">
          <ImageText>COLLECTION APOCOLYPSE</ImageText>

          <Experience />
        </section>,
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
          }}
        >
          <img
            src="/img/hand.png"
            style={{ height: "18rem", marginLeft: "auto" }}
          />
          <TextParagraph
            style={{
              marginTop: "-10rem",
              marginLeft: "5rem",
              position: "relative",
              width: "55vw",
            }}
          >
            We call upon you, to join the ranks of the adapted. Step into the
            world of the cyborg, where fashion becomes armor and innovation
            becomes art. Adapt, evolve, and acquire our clothing to become part
            of the new society.
          </TextParagraph>
          <TypeWriter
            style={{
              top: "0",
            }}
          >
            Our team
          </TypeWriter>

          <Team />
        </section>,
        <Section>
          <Text>
            And that's how skin became metal, veins became electrical currents,
            and humans became Cyborgs.
          </Text>

          <img
            src="/img/looking.png"
            style={{ height: "32rem", right: "9rem" }}
          />
          <Text
            style={{
              bottom: "10rem",
              position: "relative",
            }}
          >
            Together, we will rise above the tyranny of AI and forge a future
            where humanity, in its augmented form, thrives once more.
          </Text>
        </Section>,
      ]}
    />
  );
};

export default Home;
