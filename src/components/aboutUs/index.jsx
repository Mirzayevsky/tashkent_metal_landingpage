import React, { useEffect, useRef } from "react";
import Text from "../../language/langManager";
import { Container, DFlex, PageNumber } from "../styles/styles";
import {
  AboutUsContainer,
  AboutUsWrapper,
  CardBox,
  SectionTitle,
} from "./styles";
import pic1 from "../../assets/images/01.png";
import pic2 from "../../assets/images/02.png";
import pic3 from "../../assets/images/03.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function AboutUs() {
  //   gsap.registerPlugin(ScrollTrigger);
  //   const ref = useRef(null);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   let sections = gsap.utils.toArray(".panel");

  //   gsap.to(sections, {
  //     xPercent: -40 * (sections.length - 1),
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: ".container",
  //       pin: true,
  //       scrub: 1,
  //       snap: 1 / (sections.length - 1),
  //       // base vertical scrolling on how wide the container is so it feels more natural.
  //       end: "+=500",
  //     },
  //   });
  // });

  const cards = [
    {
      image: pic1,
      text: <Text id="aboutUs1" />,
    },
    {
      image: pic2,
      text: <Text id="aboutUs2" />,
    },
    {
      image: pic3,
      text: <Text id="aboutUs3" />,
    },
  ];

  return (
    <div id="about-us" style={{ position: "relative",padding:"20px 0" }}>
      <Container>
        {/* <AboutUsWrapper animation className="container"> */}
        <SectionTitle>
          <Text id="aboutUsTitle" />
        </SectionTitle>
        {/* <AboutUsWrapper> */}
        <AboutUsContainer>
          {cards.map(({ image, text }, index) => (
            <CardBox second={index === 1} key={index}>
              <img src={image} alt="about us" />
              <p>{text}</p>
            </CardBox>
          ))}
        </AboutUsContainer>

        {/* </AboutUsWrapper> */}
        {/* </AboutUsWrapper> */}
      </Container>
      <PageNumber>02</PageNumber>
    </div>
  );
}

export default AboutUs;
