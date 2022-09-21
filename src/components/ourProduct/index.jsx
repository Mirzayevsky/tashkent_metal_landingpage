import React from "react";
import Text, { text } from "../../language/langManager";
import { Container, PageNumber, SectionTitle, SectionTitleDark } from "../styles/styles";
import { OurProductWrapper, ProductCard, ProductWrapper } from "./styles";
import p1Img from "../../assets/images/product picture/01.svg";
import p2Img from "../../assets/images/product picture/02.svg";
import p3Img from "../../assets/images/product picture/03.svg";
import p4Img from "../../assets/images/product picture/04.svg";
import p5Img from "../../assets/images/product picture/05.svg";
import p6Img from "../../assets/images/product picture/06.svg";
import p7Img from "../../assets/images/product picture/07.svg";
import p8Img from "../../assets/images/product picture/08.svg";
import p9Img from "../../assets/images/product picture/09.svg";
import { useSelector } from "react-redux";

function OurProduct() {
  const state = useSelector(state=>state);
  const categories = state.categories;
  const lang = state.lang;
  const products = [
    {
      image: p1Img,
      text: text({ id:"p1",lang}),
    },
    {
      image: p2Img,
      text: text({ id:"p2",lang}),
    },
    {
      image: p3Img,
      text: text({ id:"p3",lang}),
    },
    {
      image: p4Img,
      text: text({ id:"p4",lang}),
    },
    {
      image: p5Img,
      text: text({ id:"p5",lang}),
    },
    {
      image: p6Img,
      text: text({ id:"p6",lang}),
    },
    {
      image: p7Img,
      text: text({ id:"p7",lang}),
    },
    {
      image: p8Img,
      text: text({ id:"p8",lang}),
    },
    {
      image: p9Img,
      text: text({ id:"p9",lang}),
    },
  ];
  return (
    <OurProductWrapper>
      <Container>
        <SectionTitle>
          <Text id="ourProductTitle" />
        </SectionTitle>
        <ProductWrapper>
          {products.map(({ image, text },index) => {
            const c = categories?.data?.find(({name})=>{
              console.log(name,text);
            return name?.toLowerCase()===text?.toLowerCase()
          }
            );
            return (
            <ProductCard to={`/product${c?`?id=${c.id}`:""}`} url={image} key={index}>
              <span>{text}</span>
            </ProductCard>
          )})}
        </ProductWrapper>
      </Container>
      <PageNumber>04</PageNumber>
    </OurProductWrapper>
  );
}

export default OurProduct;
