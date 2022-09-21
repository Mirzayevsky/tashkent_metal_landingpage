import React, { useState } from "react";
import { Container, DFlex } from "../styles/styles";
import {
  NavbarWrapper,
  NavList,
  Logo,
  Contact,
  Cart,
  LangBox,
  AmountInCart,
  MenuBarBox,
  MobileNavbar,
  CloseMobileNavbar,
  MobileNavsWrapper,
} from "./styles";
import Text from "../../language/langManager";

// icons
import LogoImage from "../../assets/icon/logo.svg";
import PhoneIcon from "../../assets/icon/phone.svg";
import BasketIcon from "../../assets/icon/basket.svg";
import menuBar from "../../assets/icon/menu-bar.svg";
import { ReactComponent as X } from "../../assets/icon/x.svg";
// redux
import { useDispatch } from "react-redux";
import { switchLang } from "../../redux/modules/lang/langAction";
import { useSelector } from "react-redux";
import langs from "../../constants/lang";
import { Link } from "react-router-dom";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const lang = state.lang;
  const cart = state.cart;
  const { UZBEK, RUSSIAN } = langs;

  const navs = [
    {
      link: "/cart",
      text: <Text id="cart" />,
    },
    {
      link: "/calculator",
      text: <Text id="navCalc" />,
    },
    {
      link: "#about-us",
      text: <Text id="aboutUs" />,
    },
    {
      link: "/product",
      text: <Text id="priceList" />,
    },
    {
      link: "/contact#address",
      text: <Text id="navContact" />,
    },
    {
      link: "/product",
      text: <Text id="navProd" />,
    },
    {
      link: "#clients",
      text: <Text id="clients" />,
    },
    {
      link: "https://t.me/tashkent_metal_bot",
      text: <Text id="tgBot" />,
    },
  ];

  return (
    <>
      <NavbarWrapper>
        <Container>
          <DFlex v="center" h="space-between">
            <Logo to="/">
              <img src={LogoImage} alt="logo" />
            </Logo>
            <NavList>
              <Link to="/product">
                <Text id="navProd" />
              </Link>
              <Link to="/contact">
                <Text id="navContact" />
              </Link>
              <Link to="/calculator">
                <Text id="navCalc" />
              </Link>
            </NavList>
            <Contact href="tel:+998712874000">
              <img src={PhoneIcon} alt="" />
              <span>71 287 40 00</span>
            </Contact>
            <Cart to="/cart">
              <img src={BasketIcon} alt="basket" />
              <span>
                <Text id="navCart" />
              </span>
              <AmountInCart>{cart ? cart.length : 0}</AmountInCart>
            </Cart>
            <LangBox
              right={lang === RUSSIAN}
              onClick={() => dispatch(switchLang())}
            >
              <span />
              <div className="left">UZ</div>
              <div className="right">RU</div>
            </LangBox>
            <MenuBarBox onClick={() => setNavbar(true)}>
              <img src={menuBar} alt="menu bar" />
            </MenuBarBox>
          </DFlex>
        </Container>
      </NavbarWrapper>
      {navbar ? (
        <MobileNavbar>
          <CloseMobileNavbar onClick={() => setNavbar(false)}>
            <X />
          </CloseMobileNavbar>
          <LangBox
            mobile
            right={lang === RUSSIAN}
            onClick={() => dispatch(switchLang())}
          >
            <span />
            <div className="left">UZ</div>
            <div className="right">RU</div>
          </LangBox>
          <MobileNavsWrapper>
            {navs.map(({ link, text:t }, index) => (
              <li>
                {link === "/contact#address" ? (
                  <a
                    onClick={() => {
                      document.location.href = link;
                      const violation = document.querySelector("#address");
                      window.scrollTo({
                        top: violation.offsetTop,
                        behavior: "smooth",
                      });
                      setNavbar(false)
                    }}
                    href={link}
                    key={index}
                  >
                    {t}
                  </a>
                ) : link === "/contact" ? (
                  <a
                    onClick={() => {
                      document.location.href = link;
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                      setNavbar(false)
                    }}
                    href={link}
                    key={index}
                  >
                    {t}
                  </a>
                ) : link.startsWith("/") ? (
                  <Link to={link} key={index} onClick={()=>setNavbar(false)}>
                    {t}
                  </Link>
                ) : (
                  <a
                    onClick={() => {
                      console.log(window.location);
                      if(window.location.pathname !== "/"){
                        window.location.href = "/"+link;
                      };
                      const violation = document.querySelector(link);
                      window.scrollTo({
                        top: violation.offsetTop,
                        behavior: "smooth",
                      });
                      setNavbar(false)
                    }}
                    href={link}
                    key={index}
                  >
                    {t}
                  </a>
                )}
                {/* <Link to={link}>{text}</Link> */}
              </li>
            ))}
          </MobileNavsWrapper>
        </MobileNavbar>
      ) : (
        ""
      )}
    </>
  );
}

export default Navbar;
