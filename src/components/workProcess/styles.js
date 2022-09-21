import styled from "styled-components";
import { DFlex } from "../styles/styles";

export const WorkProcessWrapper = styled.div`
  width: 100%;
  background-color: white;
  padding: 120px 0;
  position: relative;
  @media only screen and (max-width: 768px) {
    padding: 50px 0px;
  }
`;

export const CardWrapper = styled(DFlex)`
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 0 !important;
  }
  @media only screen and (max-width:350px){
    margin-bottom: 20px;
  }
`;

export const CardBox = styled.div`
  width: fit-content;
  width: 240px;
  @media only screen and (max-width: 1050px) {
    width: 150px;
  }
  @media only screen and (max-width: 768px) {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
  }
  @media only screen and (max-width:350px){
    margin-bottom: 15px;
  }
`;

export const CardImgPart = styled.div`
  background-color: #373435;
  width: 240px;
  height: 240px;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  img {
    width: 100px;
    height: 100px;
    margin: auto;
    display: block;
  }
  span {
    width: 100%;
    display: block;
    color: white;
    font-size: 36px;
    text-align: center;
    font-family: "TTFirsNeue-Regular";
  }

  @media only screen and (max-width: 1050px) {
    width: 130px;
    height: 130px;
    padding: 20px;
    border-radius: 10px;
    img {
      width: 50px;
      height: 50px;
    }
    span {
      font-size: 14px;
    }
  }
  @media only screen and (max-width: 768px) {
    width: 100px;
    height: 100px;
    padding: 20px;
    border-radius: 10px;
    img {
      width: 50px;
      height: 50px;
    }
    span {
      font-size: 12px;
    }
  }
  @media only screen and (max-width: 350px) {
    width: 80px;
    height: 80px;
    img {
      width: 40px;
      height: 40px;
    }
    span{
      font-size: 10px;
    }
  }

`;

export const CardTextPart = styled.div`
  p.number {
    width: 40px;
    height: 40px;
    background-color: #c4c4c4;
    font-size: 24px;
    font-family: "TTFirsNeue-Regular";
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 24px 0 17px;
  }
  p.desc {
    font-family: "TTFirsNeue-Regular";
    font-size: 16px;
  }
  @media only screen and (max-width: 1050px) {
    width: calc(100%);
    p.number {
      width: 30px;
      height: 30px;
      font-size: 20px;
      margin: 8px 0;
    }
    p.desc {
      font-size: 13px;
    }
  }
  @media only screen and (max-width: 768px) {
    width: calc(100% - 110px);
    p.number {
      width: 20px;
      height: 20px;
      font-size: 14px;
      margin: 8px 0;
    }
    p.desc {
      font-size: 12px;
    }
  }
  @media only screen and (max-width: 350px) {
    width: calc(100% - 90px);
    p.number {
      width: 16px;
      height: 16px;
      font-size: 12px;
      margin: 8px 0;
    }
    p.desc {
      font-size: 10px;
    }
  }
`;
