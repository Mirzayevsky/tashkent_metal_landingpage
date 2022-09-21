import { Link } from "react-router-dom";
import styled from "styled-components";

export const OurProductWrapper = styled.div`
  width: 100%;
  background-color: #f1f1f1;
  padding: 120px 0;
  position: relative;
  @media only screen and (max-width:1050px){
    padding: 60px 0 90px;
  }
`;

export const ProductWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ProductCard = styled(Link)`
  display: block;
  width: 30%;
  margin: 20px 0;
  height: 200px;
  padding: 36px 24px;
  background-color: white;
  background-image: url(${({ url }) => url});
  background-size: 60%;
  background-repeat: no-repeat;
  color: black;
  transition: .5s;
  &:hover {
    color: black;
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  }
  span {
    max-width: 60%;
    min-width: 10%;
    width: min-content;
    display: block;
    /* text-align: right; */
    margin-left: auto;
    font-size: 32px;
  }

  @media only screen and (max-width: 1250px) {
    padding: 20px 20px;
    height: 170px;
    span {
      font-size: 25px;
    }
  }
  @media only screen and (max-width: 1050px) {
    height: 120px;
    span {
      font-size: 18px;
    }
  }
  @media only screen and (max-width: 768px) {
    width: 48%;
    height: 150px;
  }

  @media only screen and (max-width: 650px) {
    height: 130px;
  }
  @media only screen and (max-width: 500px) {
    width: 100%;
    height: 180px;
  }
  @media only screen and (max-width: 400px) {
    height: 150px;
  }

  @media only screen and (max-width: 350px) {
    height: 130px;
    margin: 10px 0;
  }
  
  @media only screen and (max-width: 300px) {
    height: 110px;
  }
`;
