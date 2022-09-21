import React, { useEffect, useState } from "react";
import { Container } from "../../components/styles/styles";
import Text from "../../language/langManager";
import { products } from "../../constants/calcProducts";
import {
  CalculatorPageTitle,
  CalculatorPageWrapper,
  ChooseMeasurementTypeWrapper,
  DFlex,
  HalfWrapper,
  ImgSqBox,
  MeasurementBox,
  MeasurementPart,
  ProdCalcHalf,
  ProdCalcName,
  ProductBox,
  ProductCalcWrapper,
  ProductsLengthWrapper,
  ProductsWrapper,
} from "./styles";

import shvellerImg from "../../assets/images/calcProduct/shveller.png";
import NumberFormat from "react-number-format";
import {
  Navigate,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesAction } from "../../redux/modules/getCategories";
import { baseUrl } from "../../constants/link";
import { Empty, Select } from "antd";
import { getProductAction } from "../../redux/modules/getProducts";
import Loading from "../../components/loadingBox";
import EmptyBox from "../../components/emptyBox";
import ErrorBox from "../../components/errorBox";
const { Option } = Select;

function CalculatorPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [chosenProd, setChosenProd] = useState();
  const [length, setLength] = useState(1);
  let [searchParams, setSearchParams] = useSearchParams();
  const productIndex = searchParams.get("product");

  const state = useSelector((state) => state);

  const categories = state.categories;
  const products = state.products;

  //   useEffect(() => {
  //     if (productIndex === null || productIndex === undefined) {
  //       setSearchParams({ product: 0, by: "length" });
  //     }
  //   }, []);

  useEffect(() => {
    dispatch(getProductAction(0, 1000, [productIndex], ""));
  }, [productIndex]);

  useEffect(() => {
    if (products.success) {
      setChosenProd(products?.data?.content?.[0]?.id);
      setLength(1);
    }
  }, [products.success]);

  useEffect(() => {
    dispatch(getCategoriesAction());
  }, []);

  useEffect(() => {
    if (categories.success) {
      console.log(location);
      if (categories.data.length > 0 && location.search === "") {
        const category = categories.data[0];
        setSearchParams({ product: category?.id });
      }
    }
  }, [categories.success, location.search]);

  return (
    <Container>
      <CalculatorPageWrapper>
        <CalculatorPageTitle>
          <Text id="calc" />
        </CalculatorPageTitle>
        <DFlex>
          <HalfWrapper>
            <ProductsWrapper>
              {categories?.loading && <Loading />}
              {categories.error && <ErrorBox />}
              {categories?.success && categories?.data?.length === 0 && (
                <EmptyBox item="categoryItem" />
              )}
              {categories?.data?.map(({ id, name, imageID }, index) => {
                return (
                  <ProductBox
                    active={id === Number(productIndex)}
                    img={`${baseUrl}/attachment/${imageID}`}
                    key={index}
                    onClick={() => setSearchParams({ product: id })}
                  >
                    <div className="p-img" />
                    <span>
                      <Text id={name} />
                    </span>
                  </ProductBox>
                );
              })}
            </ProductsWrapper>
          </HalfWrapper>

          {productIndex && (
            <HalfWrapper>
              <ProductsLengthWrapper>
                {products.success && (
                  <Select
                    defaultValue={products?.data?.content?.[0]?.id}
                    style={{ width: "100%", marginBottom: "10px" }}
                    value={chosenProd}
                    onChange={(e) => {
                      setChosenProd(e);
                    }}
                  >
                    {products?.data?.content?.map((value, index) => {
                      const {
                        id,
                        name,
                        diameter,
                        thickness,
                        price1,
                        price2,
                        mass,
                        length,
                        stock,
                        isOnSale,
                        supplier,
                        category,
                      } = value;
                      return (
                        <Option key={id} value={id}>
                          {name} {diameter}мм {thickness}мм {length}м
                        </Option>
                      );
                    })}
                  </Select>
                )}

                <DFlex>
                  <MeasurementPart>
                    <MeasurementBox>
                      Диаметр, мм.
                      <div>
                        {products?.data?.content?.filter(
                          ({ id }) => id === chosenProd
                        )?.[0]?.diameter
                          ? products?.data?.content?.filter(
                              ({ id }) => id === chosenProd
                            )?.[0]?.diameter
                          : 0}{" "}
                        мм
                      </div>
                    </MeasurementBox>
                    <MeasurementBox>
                      Толщина, мм.
                      <div>
                        {products?.data?.content?.filter(
                          ({ id }) => id === chosenProd
                        )?.[0]?.thickness
                          ? products?.data?.content?.filter(
                              ({ id }) => id === chosenProd
                            )?.[0]?.thickness
                          : 0}{" "}
                        мм
                      </div>
                    </MeasurementBox>
                  </MeasurementPart>
                  <ImgSqBox
                    img={`${baseUrl}/attachment/${
                      categories?.data?.filter(
                        ({ id }) => id === Number(productIndex)
                      )?.[0]?.imageID
                    }`}
                  >
                    <div />
                  </ImgSqBox>
                </DFlex>
                <MeasurementBox>
                  Масс, кг.
                  <div className="input">
                    <NumberFormat
                      value={(
                        products?.data?.content?.filter(
                          ({ id }) => id === chosenProd
                        )?.[0]?.mass * length
                      ).toFixed(2)}
                      onValueChange={(e) => {
                        setLength(
                          e.floatValue /
                            products?.data?.content?.filter(
                              ({ id }) => id === chosenProd
                            )?.[0]?.mass
                        );
                      }}
                      width={"100%"}
                      suffix=" кг"
                    />
                  </div>
                </MeasurementBox>
                <MeasurementBox>
                  Длина, м.
                  <div className="input">
                    <NumberFormat
                      value={length?.toFixed(2)}
                      width={"100%"}
                      suffix=" м"
                      onValueChange={(e) => setLength(e.floatValue)}
                    />
                  </div>
                </MeasurementBox>
              </ProductsLengthWrapper>
              {/* <ProductCalcWrapper>
                <ProdCalcHalf>
                  <ProdCalcName>Вес швеллер</ProdCalcName>
                  <NumberFormat suffix=" kg" />
                </ProdCalcHalf>
                <ProdCalcHalf>
                  <ImgSqBox img={chosenProd?.img}>
                    <div />
                  </ImgSqBox>
                </ProdCalcHalf>
              </ProductCalcWrapper> */}
            </HalfWrapper>
          )}
        </DFlex>
      </CalculatorPageWrapper>
    </Container>
  );
}

export default CalculatorPage;
