import styled from "styled-components";

export const ErrorBoxWrapper = styled.div`
  width: 100%;
  height: 300px;
  img {
    width: 200px;
    height: fit-content;
    margin: auto;
    display: block;
  }
  p {
    font-size: 32px;
    text-align: center;
  }
  @media only screen and (max-width:768px){
    p{
      font-size: 25px;
    }
  }
  @media only screen and (max-width:500px){
    p{
      font-size: 20px;
    }
  }
`;
