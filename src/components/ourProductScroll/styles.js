import styled from "styled-components";

export const Section = styled.section`
  /* width: 100vw;
  height: 100vh;
  visibility: hidden;
  background-color: #222;
  margin-top: -5px; */
  position: relative;
  /* background-color: #222; */
  width: 100vw;
  height: 100vh;
  visibility: hidden;
  /* margin-top: -100px; */
  overflow-x: hidden;
  margin: 0;
  .container {
    position: absolute;
    top: 0;
    height: 100%;
    width: 50%;
  }
  .containerLeft {
    left: 0;
    width: 50%;
    h1 {
      color: white;
    }
  }
  .containerRight {
    left: 50%;
    top: 100px;
    margin-left: 10px;
    width: 50%;
  }
  h1 {
    /* font-family: sans-serif; */
    font-size: 72px;
    color: #403f3f;
    margin: 0 0 20px 0;
  }
  .containerLeft h1 {
    position: absolute;
    top: 100px;
    right: 10px;
    margin: 0;
  }

  .test {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 137px;
    border-bottom: 1px solid green;
  }

  &::before {
    content: "";
    background-color: #373435;
    width: calc(100vw - ((100vw - 1200px) / 2));
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
  }


  @media only screen and (max-width: 1250px) {
    &::before{
      width: 100%;
    }
  }
  @media only screen and (max-width: 768px) {
    h1{
      font-size: 24px;
    }
    &::before{
      width: 100%;
    }
  }

`;

// export const Container = styled.div`
//   /* position: absolute;
//   height: 100%; */
//   position:absolute;
//   top:0;
//   height:100%;
// `;

// export const ContainerLeft = styled(Container)`
//   /* left: 0;
//   width: 45%; */
//   left:0;
//   width:200px;
// `;

// export const ContainerRight = styled(Container)`
//   left: 50%;
//   top: 150px;
//   margin-left: 10px;
// `

// export const H1 = styled.div`
//   font-size: 100px;
//   /* color: #f6f6f6; */
//   opacity: .2;
//   /* margin: 0 0 20px 0; */
//   /* font-family: 'Couture Bold', sans-serif; */
//   @media screen and (max-width: 1150px) {
//     font-size: 70px;
//   }
//   @media screen and (max-width: 800px) {
//     font-size: 50px;
//   }
//   @media screen and (max-width: 600px) {
//     font-size: 40px;
//   }
// `;

// export const ContainerLeftH1 = styled.h1`
//   position: absolute;
//   top: 100px;
//   right: 10px;
//   margin: 0;
//   color: #f6f6f6;
//   font-size: 100px;
//   text-align: center;
//   font-family: 'Couture Bold', sans-serif;
//   @media screen and (max-width: 1150px) {
//     font-size: 70px;
//   }
//   @media screen and (max-width: 800px) {
//     font-size: 50px;
//   }
//   @media screen and (max-width: 600px) {
//     font-size: 40px;
//   }
// `;

// export const Test = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 137px;
//   border-bottom: 1px solid green;
// `;
