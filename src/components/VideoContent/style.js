import styled from "styled-components";
import BgImg from "../../assets/video/01.png"

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image:${({play}) => play ? `` : `url(${BgImg})`};
  background-color:${({play}) => play ? `#222` : ""};


 background-size: cover; 
   background-repeat: no-repeat; 
 @media only screen and (max-width: 756px){
    height: 60vh;
  }
  @media only screen and (max-width: 500px){
    height: 27vh;
  }
 `;

export const ShowReel = styled.div`
 .video{
   width: 80vw;
   height: 80vh;
   cursor: pointer !important;
   @media only screen and (max-width: 500px){
    width: 100%;
    height: 100%;
   }
  }
  
`;

export const SvgWrapper = styled.div`
 height: 70px;
 width: 70px;
 position: absolute;
 top: 50%;
 left: 50%;
 z-index: 999;
 transform: translate(-50%, -50%);
 border-radius: 50%;
 /* display:${({show}) => show ? "none" : "block"}; */
 
 svg{
   color: #fff ;
   height: 100%;
   width: 100%;
   cursor: pointer;
   stroke: #fff !important;
   fill: #fff;
   background-color: #000;
   border-radius: 50%;

 }
  
`;
