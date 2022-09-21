import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Text from "../../language/langManager";
import {
  CarouselItem,
  CarouselWrapper,
  SlideButton,
  Title,
  Wrapper,
} from "./styles";
import circlePrev from "../../assets/icon/prevCircle.svg";
import circleNext from "../../assets/icon/nextCircle.svg";
import certificateImg from "../../assets/images/certificate.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { getCertificateAction } from "../../redux/modules/getCertificates";
import { baseUrl } from "../../constants/link";
import EmptyBox from "../emptyBox";
import Loading from "../loadingBox";
import ErrorBox from "../errorBox";

function LicenseAndCertificates() {
  const [activeIndex, setActiveIndex] = useState(0);

  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const certificates = state.certificates;

  const carouselRef = useRef();
  const settings = {
    // dots: true,
    autoplay: true,
    pauseOnHover: true,
    infinite: true,
    arrows:true,
    speed: 1500,
    slidesToShow:
      certificates?.data?.length < 4 ? certificates?.data?.length : 4,
    slidesToScroll:
      certificates?.data?.length < 4 ? certificates?.data?.length : 4,
    // centerMode:true,
    // vertical:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:
            certificates?.data?.length < 4 ? certificates?.data?.length : 4,
          slidesToScroll:
            certificates?.data?.length < 4 ? certificates?.data?.length : 4,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow:
            certificates?.data?.length < 2 ? certificates?.data?.length : 2,
          slidesToScroll:
            certificates?.data?.length < 2 ? certificates?.data?.length : 2,
          initialSlide:
            certificates?.data?.length < 2 ? certificates?.data?.length : 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: (
      <SlideButton>
        <img src={circleNext} alt="next" />
      </SlideButton>
    ),
    prevArrow: (
      <SlideButton right>
        <img src={circlePrev} alt="prev" />
      </SlideButton>
    ),
  };

  // let items = [
  //   certificateImg,
  //   certificateImg,
  //   certificateImg,
  //   certificateImg,
  //   certificateImg,
  //   certificateImg,
  //   certificateImg,
  //   certificateImg,
  //   certificateImg,
  //   certificateImg,
  //   certificateImg,
  // ];

  // let items = certificates?.data?.map(({ id, imageId }) => (
  //   <CarouselItem key={id}>
  //     <img
  //       src={`${baseUrl}/attachment/${imageId}`}
  //       alt="logo"
  //       role="presentation"
  //     />
  //   </CarouselItem>
  // ));

  useEffect(() => {
    dispatch(getCertificateAction());
  }, []);

  return (
    <Wrapper>
      <Title>
        <Text id="licenseAndCertificates" />
      </Title>
      {certificates.loading ? (
        <Loading />
      ) : certificates.error ? (
        <ErrorBox />
      ) : certificates?.data?.length === 0 ? (
        <EmptyBox item={"certificateItem"} />
      ) : (
        <CarouselWrapper>
          <Slider fed={carouselRef} {...settings}>
            {certificates?.data?.map(({ id, imageId }) => (
              <CarouselItem key={id}>
                <img
                  src={`${baseUrl}/attachment/${imageId}`}
                  alt="logo"
                  role="presentation"
                />
              </CarouselItem>
            ))}
            {/* {items.map((item) => item)} */}
          </Slider>
        </CarouselWrapper>
      )}
    </Wrapper>
  );
}

export default LicenseAndCertificates;
