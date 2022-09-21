import React, { useEffect, useState } from "react";
import {
  FooterCol,
  FooterColWrapper,
  FooterCorner,
  FooterLogo,
  FooterText,
  FooterTextAnchor,
  FooterTitle,
  FooterWrapper,
  SocialMediaWrapper,
} from "./styles";
import footerLogo from "../../assets/icon/white-logo.svg";
import { Container, DFlex } from "../styles/styles";
import Text from "../../language/langManager";
import { ReactComponent as TgLogo } from "../../assets/icon/tg-logo.svg";
import { ReactComponent as IgLogo } from "../../assets/icon/ig-logo.svg";
import { ReactComponent as TgBotLogo } from "../../assets/icon/tg-bot.svg";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesAction } from "../../redux/modules/getCategories";

function Footer() {
  const state = useSelector((state) => state);
  const categories = state.categories;
  const dispatch = useDispatch();

  const getText = (text) => {
    return <Text id={text} />;
  };

  const [footerData, setFooterData] = useState([
    {
      title: getText("products"),
      text: [
        //   {
        //     text: getText("p1"),
        //     link: "/product",
        //   },
        //   {
        //     text: getText("p2"),
        //     link: "/product",
        //   },
        //   {
        //     text: getText("p3"),
        //     link: "/product",
        //   },
        //   {
        //     text: getText("p4"),
        //     link: "/product",
        //   },
        //   {
        //     text: getText("p5"),
        //     link: "/product",
        //   },
        //   {
        //     text: getText("p6"),
        //     link: "/product",
        //   },
        //   {
        //     text: getText("p7"),
        //     link: "/product",
        //   },
        //   {
        //     text: getText("p8"),
        //     link: "/product",
        //   },
        //   {
        //     text: getText("p9"),
        //     link: "/product",
        //   },
      ],
    },
    {
      title: getText("aboutComp"),
      text: [
        {
          text: getText("aboutUs"),
          link: "#about-us",
        },
        {
          text: getText("clients"),
          link: "#clients",
        },
        {
          text: getText("suppliers"),
          link: "#suppliers",
        },
        {
          text: getText("tgBot"),
          link: "https://t.me/tashkent_metal_bot",
        },
        {
          text: getText("callCenter"),
          link: "tel:+998712874000",
        },
        {
          text: getText("workTime"),
          link: "/contact",
        },
        {
          text: getText("ourAddress"),
          link: "/contact#address",
        },
        {
          text: getText("certificate"),
          link: "/contact",
        },
        {
          text: getText("advantages"),
          link: "#advantages",
        },
      ],
    },
    {
      title: getText("forOrder"),
      text: [
        {
          text: getText("calc"),
          link: "/calculator",
        },
        {
          text: getText("application"),
          link: "/product",
        },
        {
          text: getText("cart"),
          link: "/cart",
        },
        {
          text: getText("priceList"),
          link: "/product",
        },
      ],
    },
  ]);

  useEffect(() => {
    dispatch(getCategoriesAction());
  }, []);

  useEffect(() => {
    // if (categories.success) {
    // const c = categories?.data?.map(({ id, name }) => ({
    //   text: name,
    //   link: `/product?id=${id}`,
    // }));
    // setTimeout(() => {
    // footerData[0].text = c;
    // setFooterData(footerData);
    setFooterData((prev) =>
      prev.map((col, index) => {
        if (index === 0) {
          col.text = categories?.data?.map(({ id, name }) => ({
            text: name,
            link: `/product?id=${id}`,
          }));
        }
        return col;
      })
    );
    // }, 0);
    // }
  }, [categories.success]);

  return (
    <FooterWrapper>
      <Container>
        <FooterLogo href="/">
          <img src={footerLogo} alt="logo" />
        </FooterLogo>
        <FooterColWrapper h="space-between">
          {footerData.map(({ title, text }, index) => (
            <FooterCol key={index}>
              <FooterTitle>{title}</FooterTitle>
              {text.map(({ text: t, link }, index) => {
                return link === "/contact#address" ? (
                  <FooterTextAnchor
                    onClick={() => {
                      document.location.href = link;
                      const violation = document.querySelector("#address");
                      window.scrollTo({
                        top: violation.offsetTop,
                        behavior: "smooth",
                      });
                    }}
                    href={link}
                    key={index}
                  >
                    {t}
                  </FooterTextAnchor>
                ) : link === "/contact" ? (
                  <FooterTextAnchor
                    onClick={() => {
                      document.location.href = link;
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    }}
                    href={link}
                    key={index}
                  >
                    {t}
                  </FooterTextAnchor>
                ) : link.startsWith("/") ? (
                  <FooterText to={link} key={index}>
                    {t}
                  </FooterText>
                ) : (
                  <FooterTextAnchor
                    onClick={() => {
                      const violation = document.querySelector(link);
                      window.scrollTo({
                        top: violation.offsetTop,
                        behavior: "smooth",
                      });
                    }}
                    href={link}
                    key={index}
                  >
                    {t}
                  </FooterTextAnchor>
                );
              })}
              {footerData.length - 1 === index ? (
                <FooterCorner>
                  <a className="footerPhoneNumber" href="tel:+998712874000">
                    +998(71) 287-40-00
                  </a>
                  <a
                    className="footerAddress"
                    href="/contact#address"
                    onClick={() => {
                      document.location.href = "/contact#address";
                      const violation = document.querySelector("#address");
                      window.scrollTo({
                        top: violation.offsetTop,
                        behavior: "smooth",
                      });
                    }}
                  >
                    <Text id="addressText" />
                  </a>
                  <SocialMediaWrapper>
                    <a href="https://t.me/tashkent_metal">
                      <TgLogo />
                    </a>
                    <a href="https://www.instagram.com/tashkent.metal_uz/">
                      <IgLogo />
                    </a>
                    <a href="https://t.me/tashkent_metal_bot">
                      <TgBotLogo />
                    </a>
                  </SocialMediaWrapper>
                </FooterCorner>
              ) : (
                ""
              )}
            </FooterCol>
          ))}
        </FooterColWrapper>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
