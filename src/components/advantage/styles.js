import styled from "styled-components";


export const AdvantagesWrapper = styled.div`
  width: 100%;
  padding: 120px 0;
  position: relative;
  @media only screen and (max-width:768px){
    padding: 90px 0;
  }
  @media only screen and (max-width:550px){
    padding: 60px 0 90px;
  }
`;

const Half = styled.div`
  width: 50%;
`;

export const TextPart=styled(Half)`
  p{
      width: 90%;
      font-size: 32px;
      margin-bottom: 32px;
      line-height: 100%;
      font-family: "TTFirsNeue-Regular";
      @media only screen and (max-width: 768px) {
        font-size: 28px;
        /* line-height: 14px; */
        margin-bottom: 16px;
      }
      @media only screen and (max-width: 700px) {
        font-size: 25px;
      }
      @media only screen and (max-width: 600px) {
        font-size: 20px;
      }
      @media only screen and (max-width: 500px) {
        font-size: 16px;
      }
      @media only screen and (max-width: 430px) {
        font-size: 14px;
        margin-bottom: 12px;
      }
      @media only screen and (max-width: 430px) {
        font-size: 12px;
        margin-bottom: 10px;
      }
  }
`;

export const BottomButton = styled.button`
  background-color: red;
  color: white;
  padding: 5px 20px;
  font-size: 24px;
  border: 0;
  @media only screen and (max-width: 768px) {
    font-size: 18px;
  }
`;


export const ImgPart = styled(Half)`
  img{
    width: 100%;
      margin-left: auto;
      display: block;
  }
`;

