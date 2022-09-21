import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarWrapper = styled.nav`
  width: 100%;
  background-color: white;
  padding: 15px 0;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.15);
`;

export const Logo = styled(Link)`
  display: block;
  @media only screen and (max-width: 1050px) {
    width: 85px;
    img {
      width: 100%;
    }
  }
`;

export const NavList = styled.div`
  display: flex;
  a {
    text-decoration: none;
    display: block;
    padding: 20px;
    color: black;
    font-size: 20px;
  }
  @media only screen and (max-width: 1050px) {
    /* display: none; */
    a {
      font-size: 16px;
      padding: 10px;
    }
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const Contact = styled.a`
  color: black;
  display: flex;
  align-items: center;
  color: black;
  &:hover {
    text-decoration-color: black !important;
  }
  span {
    color: black;
    margin-left: 10px;
    font-size: 20px;
    font-family: "TTFirsNeue-Regular";
  }
  @media only screen and (max-width: 1050px) {
    span {
      font-size: 16px;
    }
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const Cart = styled(Link)`
  color: black;
  display: flex;
  align-items: center;
  &:hover {
    color: black !important;
    text-decoration-color: black !important;
  }
  span {
    margin-left: 10px;
    font-size: 20px;
    font-family: "TTFirsNeue-Regular";
  }

  @media only screen and (max-width: 768px) {
    span {
      font-size: 16px;
    }
  }
  @media only screen and (max-width: 768px) {
    margin-left: auto;
    span {
      display: none;
    }
  }
  position: relative;
`;

export const LangBox = styled.div`
  width: 100px;
  position: relative;
  display: ${({ mobile }) => (mobile ? "none" : "flex")};
  cursor: pointer;
  border: 2px solid black;
  div {
    padding: 5px;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    color: black;
    transition-duration: 0.5s;
    &.right {
      color: ${({ right }) => (right ? "white" : "black")};
    }
    &.left {
      color: ${({ right }) => (right ? "black" : "white")};
    }
  }
  span {
    display: block;
    width: 50%;
    position: absolute;
    top: 0;
    bottom: 0;
    margin-left: ${({ right }) => (right ? "50%" : "0%")};
    background-color: red;
    transition-duration: 0.5s;
  }
  @media only screen and (max-width: 1050px) {
    width: 70px;
    div {
      padding: 3px;
    }
  }
  @media only screen and (max-width: 768px) {
    display: ${({ mobile }) => (mobile ? "flex" : "none")};
  }
`;

export const AmountInCart = styled.div`
  font-size: 9px;
  padding: 1px 5px;
  border-radius: 2px;
  background-color: red;
  color: white;
  position: absolute;
  bottom: -3px;
  left: -12px;
`;

export const MenuBarBox = styled.div`
  width: 20px;
  height: 20px;
  margin-left: 20px;
  display: none;
  img {
    width: 100%;
  }

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

export const MobileNavbar = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999999999999999999;
  padding: 35px 30px;
  overflow: auto;
  @media only screen and (max-width:300px){
    padding: 20px 15px;
  }
`;

export const CloseMobileNavbar = styled.div`
  position: absolute;
  top: 35px;
  right: 30px;
  @media only screen and (max-width:300px){
    top: 20px;
    right: 15px;
  }
`;

export const MobileNavsWrapper = styled.ul`
  list-style: none;
  margin-top: 35px;

  li {
    a {
      font-size: 36px;
      line-height: 100%;
      font-family: "TTFirsNeue-Regular";
      color: black;
    }
    margin-bottom: 10px;
  }
  @media only screen and (max-width:300px){
    li a {
      font-size: 25px;
    }
  }
`;
