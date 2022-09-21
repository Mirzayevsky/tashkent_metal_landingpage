import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding-bottom: 75px;
`;

export const Title = styled.p`
  font-size: 60px;
  width: 100%;
  text-align: center;
  margin: 60px auto;
  @media only screen and (max-width: 768px) {
    font-size: 30px;
    margin: 30px auto;
  }
`;

export const CarouselItem = styled.div`
  width: 100%;
  /* padding: 20px; */
  img {
    width: 70%;
    margin: auto;
    display: block;
    box-shadow: 0px 6px 8px rgba(55, 52, 53, 0.15);
  }
`;

export const SlideButton = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white !important;
  border-radius: 50%;
  position: absolute;
  z-index: 999999999;
  ${({ right }) => (right ? "margin-left: 20px" : "margin-right: 20px")};

  /* margin-left: 20px; */
  &::before {
    content: "";
  }
  img {
    margin: auto;
    display: block;
    width: 40px;
    /* ${({ right }) =>
      right ? "margin-left: auto" : "margin-right: auto"}; */
  }
`;

export const CarouselPart = styled.div`
  /* width: calc(100% - 160px); */
`;

export const CarouselWrapper = styled.div`
  /* display: flex; */
  .slick-track {
    display: flex;
    align-items: center;
  }
`;
