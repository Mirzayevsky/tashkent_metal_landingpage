import styled from "styled-components";
import NumberFormat from "react-number-format";

export const CartTitle = styled.p`
  font-size: 72px;
  text-align: center;
  margin: 48px 0 60px;
  @media only screen and (max-width: 768px) {
    font-size: 30px;
    margin: 30px auto;
  }
`;

const Button = styled.button`
  font-size: 28px;
  padding: 14px 40px;
  border: 0;
  margin-left: 30px;
  border-radius: 10px;
  color: white;
  text-transform: uppercase;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
    padding: 7px 20px;
    margin-left: 15px;
  }
`;

export const CleanButton = styled(Button)`
  background-color: #515151;
  margin-bottom:50px;

`;

export const OrderButton = styled(Button)`
  background-color: #1bd718;
  margin-bottom:50px;

`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;
  @media only screen and (max-width: 768px) {
    margin: 40px auto;
    width: fit-content;
  }
`;

export const DeleteFromCart = styled.button`
  padding: 5px;
  display: flex;
  margin: auto;
  background-color: transparent;
  border: 0;
  color: red;
  border: 1px solid red;
  border-radius: 50px;
  &:hover {
    background-color: red;
    color: white;
  }
  @media only screen and (max-width: 768px) {
    padding:2px;
  }
`;

export const PopUpTitle = styled.p`
  /* text-align: center; */
  font-size: 24px;
  /* font-weight: bold; */
  font-family: "TTFirsNeue-DemiBold";
  /* margin-bottom: 30px; */
  margin: 0;
`;

export const PopUpInputTitle = styled.p`
  width: 360px;
  font-size: 20px;
  font-family: "TTFirsNeue-Regular";
  margin: 20px 0 5px;
`;

export const PopUpInput = styled.input`
  width: 360px;
  background-color: rgba(159, 187, 212, 0.2);
  padding: 10px;
  border: 0;
  border-radius: 5px;
  font-size: 16px;
  font-family: "TTFirsNeue-Regular";
  &::placeholder {
    color: rgba(55, 52, 53, 0.2);
  }
  @media only screen and (max-width: 610px) {
    width:100%;
  }
`;

export const PopUpInputPhoneNumber = styled(NumberFormat)`
  width: 360px;
  background-color: rgba(159, 187, 212, 0.2);
  padding: 10px;
  border: 0;
  border-radius: 5px;
  font-size: 16px;
  font-family: "TTFirsNeue-Regular";
  &::placeholder {
    color: rgba(55, 52, 53, 0.2);
  }
  @media only screen and (max-width: 610px) {
    width:100%;
  }
  
`;

export const SendButton = styled.button`
  padding: 10px;
  background-color: #1bd718;
  color: white;
  border: 0;
  border-radius: 5px;
  margin-top: 15px;
  font-family: "TTFirsNeue-DemiBold,",sans-serif;
  text-transform: uppercase;
  display: block;

`;

export const ClosePopUp = styled.div`
  width: 50px;
  height: 50px;
  padding: 10px;
  position: absolute;
  top: 0px;
  right: 0px;
  color: lightgray;
  &:hover{
    color: black;
    transition-duration: .5s;
  }
  svg{
    width: 100%;
    height: 100%;
  }
`;
