import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import AboutUs from "../../components/aboutUs";
import Advantages from "../../components/advantage";
import ClientSupplier from "../../components/clientSupplier";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Navbar from "../../components/navbar";
import OurProduct from "../../components/ourProduct";
import OurProductScroll from "../../components/ourProductScroll";
import ProductFilter from "../../components/productFilter";
import ProductHeader from "../../components/productHeader";
import ProductTable from "../../components/productTable";
import { Container } from "../../components/styles/styles";
import WorkProcess from "../../components/workProcess";

function ProductPage() {
  const [category, setCategory] = useState([]);
  const [search, setSearch] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const id = searchParams.get("id");
    setTimeout(() => {
      setCategory(id ? [Number(id)] : []);
    }, 100);
  }, [searchParams]);
  return (
    <Container>
      <ProductHeader />
      <ProductFilter
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />
      <ProductTable
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />
    </Container>
  );
}

export default ProductPage;
