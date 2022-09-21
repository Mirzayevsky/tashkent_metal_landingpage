import React from "react";
import AboutUs from "../../components/aboutUs";
import Advantages from "../../components/advantage";
import ClientSupplier from "../../components/clientSupplier";
import Footer from "../../components/footer";
import Header from "../../components/header";
import MadeBy from "../../components/madeBy";
import Navbar from "../../components/navbar";
import OurProduct from "../../components/ourProduct";
import OurProductScroll from "../../components/ourProductScroll";
import VideoContent from "../../components/VideoContent";
import WorkProcess from "../../components/workProcess";
import { BackTop } from "antd";
import { ReactComponent as Back } from "../../assets/icon/Arrow 1.svg";


function LandingPage() {

  const style = {
    height: 45,
    width: 45,
    borderRadius: "50%",
    backgroundColor: '#dedee0',
    padding:'10',
    position:"fixed",
    right:"4%",
    bottom:"12%"
  };

  return (
    <div>
      {/* <Navbar /> */}
      <Header />
      <AboutUs />
      <VideoContent/>
      {/* <OurProductScroll /> */}
      <OurProduct />
      <WorkProcess />
      <ClientSupplier/>
      <Advantages/>
      <Footer />
      <MadeBy/>
      <BackTop visibilityHeight={6000}>
        <Back style={style}  />
      </BackTop>

    </div>
  );
}

export default LandingPage;
