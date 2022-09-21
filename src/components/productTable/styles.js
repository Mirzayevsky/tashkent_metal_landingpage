import styled from "styled-components";

export const AddToCartButton = styled.div`
  width: 48px;
  height: 48px;
  padding: 8px;
  margin: auto;
  border-radius: 10px;
  transition-duration: 0.5s;
  &:hover {
    background-color: #6a8998;
    svg {
      fill: white;
    }
  }
  svg {
    width: 100%;
    height: 100%;
  }
  @media only screen and (max-width: 768px) {
    width: 24px;
    height: 24px;
    padding: 3px;
    border-radius: 5px;
  }
`;

export const PopUpBackground = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.45);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const PopUpContainer = styled.div`
  width: 520px;
  height: fit-content;
  padding: 30px;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  background-color: white;
  border-radius: 12px;
  z-index: 2;
  @media only screen and (max-width: 610px) {
    width:90%;
  }
`;

export const ProductTitle = styled.p`
  font-size: 25px;
  margin: 0;
`;

export const ProductAmount = styled.input`
  display: block;
  padding: 5px 10px;
  width: 100%;
  margin-bottom: 10px;
`;

export const ButtonWrapper = styled.div`
  width: fit-content;
  margin-left: auto;
`;

export const CleanCart = styled.button`
  background-color: #6c757d;
  border: 0;
  margin-right: 20px;
  padding: 5px 10px;
  color: white;
  border-radius: 3px;
`;

export const AddToCart = styled.button`
  border: 0;
  padding: 5px 10px;
  color: white;
  border-radius: 3px;
  background-color: red;
`;

export const PriceToggleWrapper = styled.div`
  width: fit-content;
  margin: auto;
  /* transition-duration: 1s; */
`;

export const PriceToggle = styled.div`
  font-size: ${({active})=>active?"20px":"14px"};
  transition-duration: 0.5s;
  text-align: left;
  white-space: nowrap;
  color: ${({active})=>!active && "#a9a9a9"};
  @media only screen and (max-width: 768px) {
    font-size: ${({active})=>active?"12px":"8px"};
  }
`;