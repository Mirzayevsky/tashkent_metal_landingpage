import styled from "styled-components";

export const ProductFilterWrapper = styled.div`
  padding: 10px;
  background-color: #373435;
  margin: 42px 0 32px;
  display: flex;
  align-items: center;
`;

export const SearchInputBox = styled.div`
  width: 280px;
  background-color: white;
  display: flex;
  padding: 8px;
  align-items: center;
  svg {
    width: 20px;
    height: 20px;
  }
  input {
    width: 100%;
    padding-left: 8px;
    background-color: white;
    border: 0;
    outline: 0;
    font-size: 20px;
    font-family: "TTFirsNeue-Light";
    &::placeholder {
      text-transform: uppercase;
      color: rgba(55, 52, 53, 0.2);
    }
  }

  @media only screen and (max-width: 768px) {
    width: 190px;
    height: fit-content;
    padding: 4px;
    input {
      font-size: 14px;
    }
  }

  @media only screen and (max-width: 400px) {
    width: calc(100% - 30px) !important;
  }
`;

export const NavsWrapper = styled.div`
  width: calc(100% - 280px);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-left: 10px;
  margin-left: auto;
  @media only screen and (max-width: 768px) {
    width: calc(100% - 190px);
  }
  @media only screen and (max-width: 400px) {
   width: calc(100% - 210px)
  }

`;

export const NavItem = styled.div`
  width: fit-content;
  cursor: pointer;
  &,
  a {
    font-size: 24px;
    color: white;
  }
  /* display: ${({ mobileFilter }) => (mobileFilter ? "none" : "block")}; */
  .category .icon {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    font-size: 16px;
    a {
      font-size: 16px;
    }
  }
  @media only screen and (max-width: 400px) {
    .category {
      .text {
        display: none;
      }
      .icon {
        width:40px;
        display: block;
        svg{
         height:50%;
         width:50%;
        }
      }
      svg path {
        fill: white;
        stroke: white;
      }
    }
  }
`;
