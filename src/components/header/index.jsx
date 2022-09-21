import React from "react";
import Text from "../../language/langManager";
import { Container, PageNumber } from "../styles/styles";
import {
  Button,
  HeaderTextWrapper,
  HeaderWrapper,
  MenuBox,
  SubtitleText,
  TitleText,
} from "./styles";
import { ReactComponent as MenuBar } from "../../assets/icon/menu.svg";

function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderTextWrapper>
          <TitleText>
            <Text id="headerTitleText" />
          </TitleText>
          <SubtitleText
            dangerouslySetInnerHTML={{
              __html: Text({ id: "headerSubtitleText" }),
            }}
          />
          <Button
            onClick={() => {
              document.location.href = "/product";
            }}
          >
            <Text id="productWithSaleButton" />
          </Button>
        </HeaderTextWrapper>
        <MenuBox>
          {/* <MenuBar/> */}
          <span>
            <Text id="menu" />
          </span>
        </MenuBox>
      </Container>
      <PageNumber className="page-number">01</PageNumber>
    </HeaderWrapper>
  );
}

export default Header;
