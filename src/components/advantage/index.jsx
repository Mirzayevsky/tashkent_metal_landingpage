import React from "react";
import Text from "../../language/langManager";
import { Container, DFlex, PageNumber } from "../styles/styles";
import { AdvantagesWrapper, BottomButton, ImgPart, TextPart } from "./styles";
import logoInWall from "../../assets/images/logo-in-wall.png";
import { useNavigate } from "react-router-dom";

function Advantages() {
  const navigate = useNavigate();

  return (
    <AdvantagesWrapper id={"advantages"}>
      <Container>
        <DFlex h="space-between">
          <TextPart>
            <p
              dangerouslySetInnerHTML={{ __html: Text({ id: "advantages1" }) }}
            />
            <p
              dangerouslySetInnerHTML={{ __html: Text({ id: "advantages2" }) }}
            />
            <p
              dangerouslySetInnerHTML={{ __html: Text({ id: "advantages3" }) }}
            />
            <p
              dangerouslySetInnerHTML={{ __html: Text({ id: "advantages4" }) }}
            />
            <BottomButton onClick={() => navigate("/product")}>
              <Text id="orderButton" />
            </BottomButton>
          </TextPart>
          <ImgPart>
            <img src={logoInWall} alt="" />
          </ImgPart>
        </DFlex>
      </Container>
      <PageNumber>07</PageNumber>
    </AdvantagesWrapper>
  );
}

export default Advantages;
