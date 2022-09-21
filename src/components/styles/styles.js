import styled from "styled-components";

export const Container = styled.div`
  width: 1200px;
  margin: auto;
  position: relative;
  @media only screen and (max-width: 1250px) {
    width: 1000px;
    /* padding: 0 30px; */
  }
  @media only screen and (max-width: 1050px) {
    width: 750px;
    /* padding: 0 30px; */
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0 30px;
  }
  @media only screen and (max-width: 350px) {
    padding: 0 10px;
  }
`;

export const DFlex = styled.div`
  display: flex;
  ${({ wrap }) => wrap && "flex-wrap: wrap"};
  ${({ h }) => h && `justify-content: ${h}`};
  ${({ v }) => v && `align-items: ${v}`};
`;

export const SectionTitle = styled.p`
  font-size: 96px;
  text-align: center;
  color: ${({ color }) =>
    color === "light" ? "white" : color === "dark" ? "#373435" : "#373435"};
  margin-bottom: ${({ mb }) => (mb ? mb : 0)};
  margin-top: ${({ mt }) => (mt ? mt : 0)};
  @media only screen and (max-width: 1050px) {
    font-size: 50px;
    font-family: "TTFirsNeue-DemiBold";
    margin-bottom: 40px !important;
  }
  @media only screen and (max-width: 768px) {
    font-size: 36px;
    font-family: "TTFirsNeue-DemiBold";
    margin-bottom: 20px !important;
  }
  @media only screen and (max-width:350px){
    font-size: 25px;
  }
`;

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  thead {
    background-color: #f1f1f1;
  }
  tbody {
    tr {
      cursor: pointer;
      &:hover {
        background: rgba(106, 137, 152, 0.4);
        transition-duration: 0.2s;
      }
    }
  }
`;

export const TRow = styled.tr`
  border: 1px solid #f1f1f1;
`;

export const THead = styled.th`
  font-size: 20px;
  padding: 10px;
  font-weight: 500;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const TData = styled.td`
  padding: 10px;
  text-align: center;
  font-family: "TTFirsNeue-Light";
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const PageNumber = styled.div`
  position: absolute;
  bottom: 40px;
  left: calc((100vw - 1200px) / 2);
  font-size: 24px;
  font-family: "TTFirsNeue-Regular";
  color: ${({ light }) => (light ? "white" : "rgb(55,52,53)")};
  @media only screen and (max-width: 1250px) {
    left: calc((100vw - 1000px) / 2);
  }
  @media only screen and (max-width: 1050px) {
    left: calc((100vw - 750px) / 2);
  }
  @media only screen and (max-width: 768px) {
    left: 30px;
    font-size: 20px;
  }
  @media only screen and (max-width:350px){
    left: 10px;
    font-size: 16px;
  }
`;
