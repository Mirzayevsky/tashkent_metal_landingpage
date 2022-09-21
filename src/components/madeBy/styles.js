import styled from "styled-components";
import { Container } from "../styles/styles";

export const MadeByContainer = styled(Container)`
  padding-top: 5px;
  padding-bottom: 5px;
  /* font-weight: Campton; */
  span.made-by {
    font-size: 24px;
    color: "black";
    font-weight: 500;
    /* margin-bottom: 10px; */
    line-height: 24px;
    a#link-to-site {
      color: "black" !important;
    }
  }
  .right {
    font-size: 18px;
    line-height: 18px;
    /* font-weight: 100; */
    /* font-weight: "Campton"; */
    font-family: "TTFirsNeue-Regular";
  }
  @media only screen and (max-width: 768px) {
    /* padding: 10px 30px; */
    /* padding-top: 10px;
    padding-bottom: 10px; */
    .made-by {
      font-size: 12px !important;
      line-height: 12px !important;
      /* margin-bottom: 5px !important; */
    }
    .right {
      font-size: 8px;
      line-height: 8px;
      display: block;
    }
    br {
      display: none;
    }
  }
`;
