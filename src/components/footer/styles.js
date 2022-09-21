import { Link } from "react-router-dom";
import styled from "styled-components";
import { DFlex } from "../styles/styles";

export const FooterWrapper = styled.footer`
  width: 100%;
  background-color: #373435;
  padding: 50px 0;
  color: white;
 
`;

export const FooterLogo = styled.a`
  width: fit-content;
  margin: auto;
  padding-bottom: 50px;
  display: block;
  img {
    width: 100%;
  }
  @media only screen and (max-width: 768px) {
    width: 130px;
    padding-bottom: 20px;
  }
`;

export const FooterCol = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width:500px){
    width: 45%;
    margin-bottom: 10px;
  }
   
  
`;
export const FooterTitle = styled.p`
  font-size: 36px;
  margin-bottom: 16px;
  font-family: "TTFirsNeue-DemiBold";
  @media only screen and (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;
export const FooterText = styled(Link)`
  width: fit-content;
  font-size: 24px;
  margin-bottom: 16px;
  display: block;
  font-family: "TTFirsNeue-Light";
  color: white;
  &:hover {
    color: white;
  }
  &:last-child {
    margin-bottom: 0;
  }
  @media only screen and (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;
export const FooterTextAnchor = styled.a`
  width: fit-content;
  font-size: 24px;
  margin-bottom: 16px;
  display: block;
  font-family: "TTFirsNeue-Light";
  color: white;
  &:hover {
    color: white !important;
  }
  &:last-child {
    margin-bottom: 0;
  }
  @media only screen and (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 7px;
  }
`;

export const FooterCorner = styled.div`
  margin: auto 0 0 0;
  color: white;
  font-size: 24px;
  .footerPhoneNumber {
    width: fit-content;
    display: block;
    color: white;
  }
  .footerAddress {
    width: fit-content;
    margin: 16px 0;
    display: block;
    color: white;
  }
  @media only screen and (max-width: 768px) {
    font-size: 12px;
    margin-top: 12px;
    .footerAddress {
      margin: 9px 0;
    }
  }
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  a {
    width: 27px;
    height: 27px;
    margin-right: 20px;
    display: block;
    svg {
      fill: white;
      width: 100%;
      height: 100%;
    }
  }
  @media only screen and (max-width: 768px) {
    a {
      width: 22px;
      height: 22px;
      margin-right: 15px;
    }
  }
`;

export const FooterColWrapper = styled(DFlex)`
  @media only screen and (max-width:500px){
  flex-wrap:wrap;
  }
 
`;
