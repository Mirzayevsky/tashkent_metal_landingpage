import styled from "styled-components";
import { Container } from "../styles/styles";

export const AboutUsWrapper = styled.div`
  padding: 80px 0;
  width: 100vw;
  height: 100vh;
  position: relative;
  /* overflow-x: auto; */
  background-color: white;
  overscroll-behavior: none;
  overflow: auto;
  /* display: ${({ animation }) => (animation ? "block" : "none")}; */
  @media only screen and (max-width: 768px) {
    /* flex-direction: column; */
    width: 100%;
    height: fit-content !important;
    /* display: ${({ animation }) => (animation ? "none" : "block")}; */
  }
`;

export const AboutUsContainer = styled.div`
  background-color: white;
  position: relative;
  padding: 0px 0 120px;
  /* @media only screen and (max-width: 1250px) {
    transform: translateX((100vw - 1000px) / 2);
  }
  @media only screen and (max-width: 1050px) {
    transform: translateX((100vw - 1000px) / 2);
  } */

  @media only screen and (max-width: 768px) {
    /* flex-direction: column; */
    /* height: fit-content !important; */
    /* display: ${({ animation }) => (animation ? "none" : "flex")}; */
    padding: 0 0px 90px;
  }
  @media only screen and (max-width:350px){
    padding: 0 0 60px;
  }
`;

export const SectionTitle = styled.div`
  font-size: 96px;
  /* padding: 0 calc((100vw - 1200px) / 2); */
  @media only screen and (max-width: 1250px) {
    /* padding: 0 calc((100vw - 1000px) / 2); */
  }
  @media only screen and (max-width: 1050px) {
    /* padding: 0 calc((100vw - 750px) / 2); */
  }
  @media only screen and (max-width: 768px) {
    /* padding: 0 30px; */
    font-size: 36px;
  }
`;

export const CardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  /* flex-direction: column; */
  width: 100%;
  /* margin: 30px; */
  /* height: 300px; */
  margin: 40px 0;
  
  flex-direction: ${({ second }) => (second ? "row-reverse" : "row")};
  &:first-child {
    margin: 0;
  }
  &:last-child {
    margin: 0;
  }
  img {
    width: 48%;
    height: fit-content;
    margin-bottom: 20px;
  }
  p {
    width: 48%;
    font-size: 20px;
    font-family: "TTFirsNeue-Regular";
  }

  @media only screen and (max-width: 1050px) {
    p {
      font-size: 16px;
    }
    margin: 90px 0;
  }

  @media only screen and (max-width: 768px) {
    img,
    p {
      width: 100%;
      font-size: 14px;
    }
    margin: 60px 0;
    /* p{
      font-size: 12px;
    } */
  }
  @media only screen and (max-width:350px){
    p{
      font-size: 11px;
    }
    margin: 20px 0;
  }
`;
