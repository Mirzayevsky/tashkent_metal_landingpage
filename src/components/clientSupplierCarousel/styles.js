import styled from "styled-components";

export const SlideButton = styled.div`
  /* width: 80px; */
  /* height: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;
  /* @media only screen and (max-width:610px){
  
  } */
 
  &::before{
      content: "";
  }
  img {
    margin: auto;
    display: block;
    width: 20px;
    @media only screen and (max-width:610px){
     width: 10px;
}
    /* ${({ right }) => (right ? "margin-left: auto" : "margin-right: auto")}; */
  }
`;

export const CarouselPart = styled.div`
  /* width: calc(100% - 160px); */
`;


export const CarouselWrapper = styled.div`
  /* display: flex; */
  width: 80%;
  margin: auto;
  height: 280px;
  padding-top: 2%;
  @media only screen and (max-width: 610px){
    height: 140px;
    width: 80%;
    padding-top: 0;
  }
  .slick-track{
    display: flex;
    align-items: center ;
    /* margin-top: 30px; */
   
    @media only screen and (max-width: 610px){
      margin-top: 10px;
    }
  }
`;

export const CarouselItem = styled.div`
  width: 100% !important;
  height: 250px !important;
  /* background-color: #fff; */
  display: flex;
  align-items: center !important;
  justify-content: center !important;
  /* margin-left: 20%; */
  margin: auto;
  @media only screen and (max-width: 1200px) {
    /* margin-left: 15%; */
  }
  @media only screen and (max-width:1000px) {
    height: 180px !important;
    /* width: 180px !important; */
  }
  @media only screen and (max-width: 756px) {
    /* height: 150px !important;
    width: 150px !important; */
  }

  @media only screen and (max-width: 610px) {
    height: 140px !important;
    /* width: 110px !important; */
    /* margin-left: 20%; */
  }

`;

export const ItemWrapper = styled.div`
  width: 70% !important;
  height: 100% !important;
  margin: auto;
  background-color: #fff;
  padding: 10px;
  /* margin-top: 80px; */
  @media only screen and (max-width: 756px) {
    /* margin-top: 50px; */
  }
  @media only screen and (max-width:610px){
    /* margin-top: 50px; */
  }
  img{
  width: 100% !important;
  height: 100% !important;
  /* margin-top: 10%; */
  object-fit: contain;
  @media only screen and (max-width: 610px){
    /* height: fit-content !important; */
    /* width: 90% !important; */
  }
}
`;
