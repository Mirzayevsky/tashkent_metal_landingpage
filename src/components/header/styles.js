import styled from "styled-components";
import mainBg from "../../assets/images/home_page.jpg";

export const HeaderWrapper = styled.header`
  width: 100%;
  height: calc(100vh - 100px);
  min-height: 400px;
  background-image: url(${mainBg});
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  &::after {
    content: "";
    width: 1200px;
    height: 100%;
    position: absolute;
    right: 0;
    background: rgba(55, 52, 53, 0.96);
    margin: 0 0 0 auto;
  }
  @media only screen and (max-width: 1250px) {
    &::after {
      width: 100%;
    }
    .page-number{
      color: white;
      z-index: 9999999999999999;
    }
  }
  @media only screen and (max-width:1050px){
    height:calc(100vh - 75px);
  }
  @media only screen and (max-width:768px){
    height: calc(100vh - 55px);
  }
`;

export const HeaderTextWrapper = styled.div`
  width: 900px;
  margin: 0 20px 0 auto;
  position: relative;
  color: white;
  z-index: 9;

  @media only screen and (max-width: 1200px) {
    width: 100%;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const TitleText = styled.div`
  font-size: 84px;
  line-height: 84px;
  @media only screen and (max-width: 1050px) {
    font-size: 60px;
    line-height: 60px;
  }
  @media only screen and (max-width: 768px) {
    font-size: 40px;
    line-height: 40px;
  }
  @media only screen and (max-width:450px){
    font-size: 28px;
  }
`;

export const SubtitleText = styled.div`
  width: 50%;
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 40px;
  font-family: "TTFirsNeue-Regular";
  @media only screen and (max-width: 768px) {
    width: 90%;
    font-size: 18px;
  }
  @media only screen and (max-width:450px){
    width: 100%;
    font-size: 16px;
  }
`;

export const Button = styled.button`
  font-size: 16px;
  padding: 5px 15px;
  background-color: red;
  color: white;
  text-transform: uppercase;
  border: 0;
  @media only screen and (max-width: 768px) {
    font-size: 13px;

  }
`;

export const MenuBox = styled.div`
  width: fit-content;
  height: fit-content;
  margin: auto auto auto 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  span {
    display: block;
    writing-mode: tb-rl;
    transform: rotate(180deg);
    text-transform: uppercase;
    margin-top: 20px;
    font-family: "TTFirsNeue-Light";
    font-size: 24px;
    line-height: 20px;
    /* text-orientation: sideways; */
  }
  @media only screen and (max-width:1250px){
    display: none;
  }
`;
