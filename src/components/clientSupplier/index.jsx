import React, { useEffect } from "react";
// import AliceCarousel from "react-alice-carousel";
import { CarouselItem, ClientSupplierWrapper, Gap ,Container} from "./styles";
import Text from "../../language/langManager";

// images
import goldenHouseLogo from "../../assets/images/golden-house-logo.png";
import discoverInvestLogo from "../../assets/images/discover-invest-logo.png";
import tashkentCityLogo from "../../assets/images/tashkent-city-logo.png";
import {
  DFlex,
  PageNumber,
  SectionTitle,
  SectionTitleDark,
} from "../styles/styles";
import ClientSupplierCarousel from "../clientSupplierCarousel";
import { useDispatch, useSelector } from "react-redux";
import { getCertificateAction } from "../../redux/modules/getCertificates";
import { getClientAction } from "../../redux/modules/getClients";
import { getSupplierAction } from "../../redux/modules/getSuppliers";

function ClientSupplier() {
  const state = useSelector((state) => state);
  const clients = state.clients;
  const suppliers = state.suppliers;
  const handleDragStart = (e) => e.preventDefault();

  const dispatch = useDispatch();

  // const clientsLogos = [
  //   goldenHouseLogo,
  //   discoverInvestLogo,
  //   tashkentCityLogo,
  //   goldenHouseLogo,
  //   discoverInvestLogo,
  //   tashkentCityLogo,
  //   goldenHouseLogo,
  //   discoverInvestLogo,
  //   tashkentCityLogo,
  // ];

  // const items = [
  //   // <DFlex h="space-around" onDragStart={handleDragStart}>
  //     <img src={goldenHouseLogo} alt="logo" role="presentation" />,
  //     <img src={discoverInvestLogo} alt="logo" role="presentation" />,
  //     <img src={tashkentCityLogo} alt="logo" role="presentation" />,
  //   // </DFlex>,
  //   // <DFlex h="space-around" onDragStart={handleDragStart}>
  //     <img src={goldenHouseLogo} alt="logo" role="presentation" />,
  //     <img src={discoverInvestLogo} alt="logo" role="presentation" />,
  //     <img src={tashkentCityLogo} alt="logo" role="presentation" />,
  //   // </DFlex>,
  //   // <DFlex h="space-around" onDragStart={handleDragStart}>
  //     <img src={goldenHouseLogo} alt="text" role="presentation" />,
  //     <img src={discoverInvestLogo} alt="text" role="presentation" />,
  //     <img src={tashkentCityLogo} alt="text" role="presentation" />,
  //   // </DFlex>,
  // ];

  useEffect(() => {
    // dispatch(getCertificateAction());
    dispatch(getClientAction());
    dispatch(getSupplierAction());
  }, []);

  return (
    <ClientSupplierWrapper>
      <Container>
        <ClientSupplierCarousel
          id={"clients"}
          title="clientsTitle"
          loading={clients.loading}
          error={clients.error}
          items={clients?.data?.map(({ imageId }) => imageId)}
          dark
          item="clientItem"
        />
        <Gap />
        <ClientSupplierCarousel
          id={"suppliers"}
          title="suppliersTitle"
          loading={suppliers.loading}
          error={suppliers.error}
          items={suppliers?.data?.map(({ imageId }) => imageId)}
          dark
          item="supplierItem"
        />
      </Container>
      <PageNumber light>06</PageNumber>
    </ClientSupplierWrapper>
  );
}

export default ClientSupplier;
