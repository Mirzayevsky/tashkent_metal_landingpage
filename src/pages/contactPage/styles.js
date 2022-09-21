import styled from "styled-components";

export const ContactWrapper = styled.div`
  width: 100%;
`;

export const MapAndContactWrapper = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 75px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MapWrapper = styled.div`
  width: 50%;
  iframe {
    width: 100%;
    height: 100%;
    border: 0;
    border-radius: 15px;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    iframe {
      height: 300px;
    }
  }
`;

export const TextWrapper = styled.div`
  width: 50%;
  padding: 30px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 30px 0;
  }
`;

export const TextBox = styled.div`
  display: flex;
  margin-bottom: 24px;
  
  &:last-child {
    margin-bottom: 0;
  }
  img {
    margin-top: 5px;
    width: 28px;
    height: 28px;
  }
  div {
    padding: 0 10px;
    width: calc(100% - 28px);
    p {
      font-family: "TTFirsNeue-DemiBold";
      font-size: 36px;
      margin-bottom: 10px;
      line-height: 36px;
    }
    span {
      a {
        color: black;
        text-decoration: none !important;
      }
      ul {
        display: flex;
        list-style: none;
        height: fit-content;
        li {
          margin-right: 12px;
          height: fit-content;

          a {
            width: 26px;
            height: 26px;
            display: flex;
            img {
              display: block;
              width: 100%;
              height: 100%;
              margin: 0;
            }
          }
        }
         @media only screen and (max-width:500px){
       margin-top:20px;
      }
      }
      
    }
   
  }
  @media only screen and (max-width: 1050px) {
    div p {
      font-size: 32px;
    }
  }
  @media only screen and (max-width: 768px) {
    div p {
      font-size: 30px;
      margin-bottom: 0px;
    }
  }
  @media only screen and (max-width: 350px) {
  
    div p {
      font-size: 20px;
    }
  
   
  }
`;
