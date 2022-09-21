import React from "react";
import Text from "../../language/langManager";
import { Container } from "../styles/styles";
import { Description, ProductHeaderWrapper, Title } from "./styles";

function ProductHeader() {
  return (
    <ProductHeaderWrapper>
        {/* <ProductHeader> */}
        <Title>
          <Text id="productPageTitle" />
        </Title>
        <Description>
          <Text id="productPageDesc" />
        </Description>
        {/* </ProductHeader> */}
    </ProductHeaderWrapper>
  );
}

export default ProductHeader;
