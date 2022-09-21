import { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//styles
import {
  Section,
  H1,
  ContainerLeftH1,
  ContainerLeft,
  ContainerRight,
} from "./styles";
import Text from "../../language/langManager";
import { PageNumber } from "../styles/styles";

const OurProductScroll = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    // gsap.registerPlugin(ScrollTrigger);

    gsap.set("#section", { autoAlpha: 1 });

    ScrollTrigger.create({
      trigger: "#section",
      pin: true,
      start: "top top",
      end: "+=1000", // 1000 - 515 = pause
    });

    ScrollTrigger.matchMedia({
      "(min-width: 768px)": function () {
        gsap.to(".containerRight", {
          y: -665,
          duration: 1,
          ease: "none",
          scrollTrigger: {
            trigger: "section",
            pin: true,
            scrub: true,
            start: "top top",
            end: "+=665", // same value as the ytransform
            refreshPriority: -1,
          },
        });
      },
    });
    ScrollTrigger.matchMedia({
      "(max-width: 768px)": function () {
        gsap.to(".containerRight", {
          y: -290,
          duration: 1,
          ease: "none",
          scrollTrigger: {
            trigger: "section",
            pin: true,
            scrub: true,
            start: "top top",
            end: "+=290", // same value as the ytransform
            refreshPriority: -1,
          },
        });
      },
    });

    // and the WORDS =========
    var words = gsap.utils.toArray(".containerRight h1").forEach((word) => {
      gsap.to(word, {
        color: "white",
        duration: 0.5,
        scrollTrigger: {
          trigger: word,
          start: "top 120px",
          end: "top 75px",
          toggleActions: "play reverse play reverse",
        },
      });
    });
  }, []);
  return (
    <Section id={"section"}>
      {/* <div class="test"></div> */}
      <div className="container containerLeft">
        <h1>
          <Text id="ourProductAnimationTitle" />
        </h1>
      </div>
      <div className="container containerRight">
        <h1 className="right">
          <Text id="sp1" />
        </h1>
        <h1 className="right">
          <Text id="sp2" />
        </h1>
        <h1 className="right">
          <Text id="sp3" />
        </h1>
        <h1 className="right">
          <Text id="sp4" />
        </h1>
        <h1 className="right">
          <Text id="sp5" />
        </h1>
        <h1 className="right">
          <Text id="sp6" />
        </h1>
      </div>

      {/* <div id="wrap"> */}

      {/* <ContainerLeft className="container containerLeft">
          <ContainerLeftH1 id={"we-are"}>
            <Text id="outProductAnimationTitle" />
          </ContainerLeftH1>
        </ContainerLeft>
        <ContainerRight className="container containerRight">
          <H1 className="right word">
            <Text id="sp1" />
          </H1>
          <H1 className="right word">
            <Text id="sp2" />
          </H1>
          <H1 className="right word">
            <Text id="sp3" />
          </H1>
          <H1 className="right word">
            <Text id="sp4" />
          </H1>
          <H1 className="right word">
            <Text id="sp5" />
          </H1>
          <H1 className="last">
            <Text id="sp6" />
          </H1>
        </ContainerRight> */}
      {/* </div> */}
      <PageNumber light>03</PageNumber>
    </Section>
  );
};

export default OurProductScroll;
