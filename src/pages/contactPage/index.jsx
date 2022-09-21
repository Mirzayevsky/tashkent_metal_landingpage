import React from "react";
import LicenseAndCertificates from "../../components/licenseAndCertidfaicatesCarousel";
import { Container } from "../../components/styles/styles";
import Text from "../../language/langManager";
import {
  ContactWrapper,
  MapAndContactWrapper,
  MapWrapper,
  TextBox,
  TextWrapper,
  Title,
} from "./styles";

import mapIcon from "../../assets/icon/map-pin.svg";
import clockIcon from "../../assets/icon/clock.svg";
import callIcon from "../../assets/icon/phone-call.svg";
import globeIcon from "../../assets/icon/globe.svg";
import instagramLogo from "../../assets/icon/instagramLogo.svg";
import telegramLogo from "../../assets/icon/telegramLogo.svg";
import tgBotLogo from "../../assets/icon/tg-bot-logo.svg";

function ContactPage() {
  return (
    <ContactWrapper>
      <Container>
        <LicenseAndCertificates />

        <MapAndContactWrapper id="address">
          <MapWrapper>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15492.108601933558!2d69.13688744411928!3d41.265925946171556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x90199120e34af8e4!2zNDHCsDE1JzU3LjMiTiA2OcKwMDgnNTIuMiJF!5e1!3m2!1sen!2s!4v1646204318021!5m2!1sen!2s"
              loading="lazy"
            />
          </MapWrapper>
          <TextWrapper>
            <TextBox>
              <img src={mapIcon} alt="map" />
              <div>
                <p>
                  <Text id="addressTitle" />
                </p>
                <span>
                  <Text id="address" />
                </span>
              </div>
            </TextBox>
            <TextBox>
              <img src={clockIcon} alt="" />
              <div>
                <p>
                  <Text id="workModeTitle" />
                </p>
                <span>
                  <Text id="workMode" />
                </span>
              </div>
            </TextBox>
            <TextBox>
              <img src={callIcon} alt="" />
              <div>
                <p>
                  <Text id="callCenterTitle" />
                </p>
                <span>
                  <a href="tel:+99871 287 40 00">+99871 287 40 00</a>
                </span>
                <br />
                <span>
                  <a href="tel:+99871 287 40 00">+99871 287 40 00</a>
                </span>
              </div>
            </TextBox>
            <TextBox>
              <img src={globeIcon} alt="" />
              <div>
                <p>
                  <Text id="socialMedia" />
                </p>
                <span>
                  <ul className={'bottom-ul'}>
                    <li>
                      <a href="https://t.me/tashkent_metal">
                        <img src={telegramLogo} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/tashkent.metal_uz/">
                        <img src={instagramLogo} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="https://t.me/tashkent_metal_bot">
                        <img src={tgBotLogo} alt="" />
                      </a>
                    </li>
                  </ul>
                </span>
              </div>
            </TextBox>
          </TextWrapper>
        </MapAndContactWrapper>
      </Container>
    </ContactWrapper>
  );
}

export default ContactPage;
