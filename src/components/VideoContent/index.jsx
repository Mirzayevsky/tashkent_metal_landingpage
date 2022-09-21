import React, { useEffect, useState } from "react";
import { Container, SvgWrapper, ShowReel } from "./style";
import { useRef } from "react";
import { ReactComponent as PlaySvg } from "../../assets/icon/play-button-svgrepo-com.svg";
import request from "../../firebase/request";
const VideoContent = () => {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);
  const [video, setVideo] = useState([{url: ''}]);


  useEffect(()=> {
      request.Call("video").then(res => {
        setVideo(res)
      })
  }, [])
  
  return (
    <Container play={play}>
      {play ? 
        <ShowReel onClick={() => setPlay(false)}>
          <video
            id="video1"
            ref={videoRef}
            autoPlay={true}
            className={"video"}
            src={video[0].url}
            loop="loop"
          />
        </ShowReel>
       : 
        <SvgWrapper onClick={() => setPlay(true)}>
          <PlaySvg onClick={() => {setPlay( ! play)}} />
        </SvgWrapper>
      }
    </Container>
  );
};
export default VideoContent;
