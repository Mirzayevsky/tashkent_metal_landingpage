import React, { useRef, useState } from "react";
// import AliceCarousel from "react-alice-carousel";
import Text from "../../language/langManager";
import { SectionTitle } from "../styles/styles";
import {
  CarouselCardWrap,
  CarouselItem,
  CarouselPart,
  CarouselWrapper,
  ItemWrapper,
  SlideButton,
} from "./styles";
import prevIcon from "../../assets/icon/prev.svg";
import nextIcon from "../../assets/icon/next.svg";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { baseUrl } from "../../constants/link";
import EmptyBox from "../emptyBox";
import Loading from "../loadingBox";
import ErrorBox from "../errorBox";

function ClientSupplierCarousel({
  loading,
  error,
  title,
  items,
  id,
  dark,
  item,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef();
  const settings = {
    // dots: true,
    autoplay: true,
    pauseOnHover: true,
    infinite: true,
    // arrows:false,
    // centerPadding:50,
    // centerMode:true,
    speed: 1500,
    slidesToShow: items.length < 3 ? items.length : 3,
    slidesToScroll: items.length < 3 ? items.length : 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: items.length < 3 ? items.length : 3,
          slidesToScroll: items.length < 3 ? items.length : 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: items.length < 2 ? items.length : 2,
          slidesToScroll: items.length < 2 ? items.length : 2,
          initialSlide: 2,
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
        <img src={nextIcon} alt="prev" />
      </SlideButton>
    ),
    prevArrow: (
      <SlideButton right>
        <img src={prevIcon} alt="prev" />
      </SlideButton>
    ),
  };
  


  items = items.map((logo, index) => (
    <CarouselItem key={index}>
      <ItemWrapper>
      <img
        src={`${baseUrl}/attachment/${logo}`}
        alt="logo"
        role="presentation"
      />
      </ItemWrapper>
    </CarouselItem>
  ));

  

  return (
    <>
      <SectionTitle id={id} color="light" mb="40px">
        <Text id={title} />
      </SectionTitle>
      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorBox />
      ) : items.length === 0 ? (
        <EmptyBox item={item} dark={dark} />
      ) : (
        <CarouselWrapper>
          {/* <SlideButton onClick={() => carouselRef.current.slickPrev()}>
          <img src={prevIcon} alt="prev" />
        </SlideButton> */}
          {/* <CarouselPart> */}
          <Slider fed={carouselRef} {...settings}>
             {items.map((item) => item)}
          </Slider>
          {/* </CarouselPart> */}
          {/* <SlideButton right onClick={() => carouselRef.current.slickNext()}>
          <img src={nextIcon} alt="prev" />
        </SlideButton> */}
        </CarouselWrapper>
      )}
    </>
  );
}

export default ClientSupplierCarousel;
