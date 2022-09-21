import styled from "styled-components";

export const CalculatorPageWrapper = styled.div`
  width: 100%;
  /* padding: 30px 0; */
  padding-bottom: 50px;
`;

export const CalculatorPageTitle = styled.div`
  font-size: 72px;
  line-height: 100%;
  text-align: center;
  margin: 60px 0 70px;
  @media only screen and (max-width: 1050px) {
    font-size: 50px;
  }
  @media only screen and (max-width: 750px) {
    font-size: 32px;
    margin: 20px 0 25px;
  }
`;

export const DFlex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const HalfWrapper = styled.div`
  width: 500px;
  @media only screen and (max-width: 1050px) {
    width: 100%;
  }
`;

export const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
`;

export const ProductBox = styled.div`
  width: 150px;
  /* height: 125px; */
  border-radius: 15px;
  padding: 15px;
  box-shadow: 0px 3px 6px rgba(106, 137, 152, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px calc(10% / 6);
  background-color: ${({ active }) => (active ? "#6A8998" : "white")};
  cursor: pointer;
  transition-duration: 0.5s;
  &:hover {
    box-shadow: none;
  }
  .p-img {
    width: 75px;
    height: 75px;
    background-image: url(${({ img }) => img});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
  span {
    text-align: center;
    color: ${({ active }) => (active ? "white" : "black")};
  }
  @media only screen and (max-width: 650px) {
    width: 48%;
    margin: 10px calc(4% / 4);
  }
`;

export const ProductsLengthWrapper = styled.div`
  width: 100%;
  box-shadow: 0px 6px 12px rgba(106, 137, 152, 0.3);
  border-radius: 15px;
  padding: 30px 20px;
  margin-bottom: 20px;
`;

export const ChooseMeasurementTypeWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 10px;
  div {
    width: 50%;
    text-align: center;
    padding: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &.active {
      background-color: #6a8998;
      color: white;
      border: 0 !important;
    }
    &:first-child {
      border-radius: 5px 0 0 5px;
      border: 2px solid black;
      border-right: 0;
    }
    &:last-child {
      border-radius: 0 5px 5px 0;
      border: 2px solid black;
      border-left: 0;
    }
  }
`;

export const MeasurementBox = styled.div`
  width: 100%;
  margin-bottom: 10px;
  background-color: #f1f1f1;
  padding: 6px 6px 6px 20px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    width: 115px;
    background-color: white;
    text-align: center;
    padding: 7px;
    border-radius: 5px;
    font-size: 16px;
    &.input {
      border: 1px solid black;
    }
    input {
      width: 100%;
      border: 0;
      outline: 0;
      text-align: center;
    }
  }
  @media only screen and (max-width:475px){
      div{
          width: 70px;
      }
  }
`;

export const ProductCalcWrapper = styled.div`
  width: 100%;
  box-shadow: 0px 6px 12px rgba(106, 137, 152, 0.3);
  border-radius: 15px;
  padding: 20px 40px;
  display: flex;
`;

export const ProdCalcHalf = styled.div`
  width: 50%;
  input {
    padding: 8px 12px;
    margin-bottom: 25px;
    border-radius: 5px;
    outline: 0;
    border: 2px solid #373435;
  }
`;

export const ProdCalcName = styled.div`
  font-size: 24px;
  margin-bottom: 15px;
`;

export const ImgSqBox = styled.div`
  width: 130px;
  height: 114px;
  padding: 15px;
  margin-left: auto;
  box-shadow: 0px 0 6px rgba(106, 137, 152, 0.3);
  border-radius: 15px;
  div {
    width: 100%;
    height: 100%;
    background-image: url(${({ img }) => img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

  @media only screen and (max-width: 475px) {
      width: 90px;
      padding: 10px;
  }
  @media only screen and (max-width: 400px) {
      width: 70px;
  }
`;

export const MeasurementPart = styled.div`
  width: calc(100% - 140px);
  @media only screen and (max-width: 475px) {
      width: calc(100% - 100px);
  }
  @media only screen and (max-width: 475px) {
      width: calc(100% - 80px);
  }
`;
