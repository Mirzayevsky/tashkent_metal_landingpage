import styled from "styled-components";

export const ProductHeaderWrapper = styled.div`
  width: 80%;
  margin: auto;
  text-align: center;
  margin-top: 48px;
  @media only screen and (max-width:550px){
    width: 100%;
  }
`;

export const Title = styled.p`
  font-size: 48px;
  margin-bottom: 16px;
  @media only screen and (max-width: 768px) {
    font-size: 30px;
    margin-bottom: 8px;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  font-family: "TTFirsNeue-Light";
  @media only screen and (max-width: 768px) {
    font-size: 12px;
    
  }
`;