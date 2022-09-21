import React, { useEffect } from "react";
import AboutUs from "../../components/aboutUs";
import Advantages from "../../components/advantage";
import ClientSupplier from "../../components/clientSupplier";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Navbar from "../../components/navbar";
import OurProduct from "../../components/ourProduct";
import OurProductScroll from "../../components/ourProductScroll";
import WorkProcess from "../../components/workProcess";
import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "../landingPage";
import ProductPage from "../productPage";
import CartPage from "../cartPage";
import ContactPage from "../contactPage";
import CalculatorPage from "../calculatorPage";


function MainPage() {
  const location = useLocation();
  // useEffect(() => {
  //   console.log(location);
  // }, [location]);

 
  return (
    <div>
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/product" element={<ProductPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="/cart" element={<CartPage />} />
        <Route exact path="/calculator" element={<CalculatorPage />} />
      </Routes>

    
    </div>
  );
}

export default MainPage;
