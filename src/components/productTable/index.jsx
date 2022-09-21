import React from "react";
import Text from "../../language/langManager";
import { Table, TableWrapper, TData, THead, TRow } from "../styles/styles";
import { ReactComponent as CartIcon } from "../../assets/icon/cart/cart-icon.svg";
import { Pagination } from "antd";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProductAction } from "../../redux/modules/getProducts";
import { useSelector } from "react-redux";
import { useState } from "react";
import {
  AddToCart,
  AddToCartButton,
  ButtonWrapper,
  CleanCart,
  PopUpBackground,
  PopUpContainer,
  PriceToggle,
  PriceToggleWrapper,
  ProductAmount,
  ProductTitle,
} from "./styles";
import { addToCart } from "../../redux/modules/cart/cartAction";
import langConst from "../../constants/lang";
import uzbek from "../../language/uzbek";
import russian from "../../language/russian";
import Loading from "../loadingBox";
import EmptyBox from "../emptyBox";
import ErrorBox from "../errorBox";
import { thousandSeparator } from "../../utils/numberManager";

// import axios from "axios";
function ProductTable({ search, category, setCategory }) {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const [suppliersIds, setSuppliersIds] = useState([]);
  const [isCash, setIsCash] = useState(true);
  const [amount, setAmount] = useState(1);
  const [addToCartProd, setAddToCartProd] = useState({
    popUp: false,
    data: {},
  });

  const getSuppliers = () => {
    return suppliersIds.join(",");
  };

  useEffect(() => {
    dispatch(getProductAction(page, size, category, search));
  }, [page, size, category, search]);

  const state = useSelector((state) => state);
  const products = state.products;
  const lang = state.lang;

  useEffect(() => {
    console.log(addToCartProd);
  }, [addToCartProd]);

  return (
    <div>
      {addToCartProd.popUp && (
        <div>
          <PopUpBackground />
          <PopUpContainer>
            <ProductTitle>{addToCartProd?.data?.name}</ProductTitle>
            <ProductAmount
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              type="number"
              placeholder={
                lang === langConst.UZBEK
                  ? uzbek["length"]
                  : lang === langConst.RUSSIAN
                  ? russian["length"]
                  : ""
              }
            />
            <ButtonWrapper>
              <CleanCart
                onClick={() => {
                  setAddToCartProd({ popUp: false, data: {} });
                  setAmount(1);
                }}
              >
                <Text id={"cleanOrder"} />
              </CleanCart>
              <AddToCart
                onClick={() => {
                  if (amount > 0) {
                    dispatch(
                      addToCart({
                        productId: addToCartProd?.data?.id,
                        amount: amount,
                      })
                    );
                    setAddToCartProd({ popUp: false, data: {} });
                    setAmount(1);
                  }
                }}
              >
                <Text id={"makeAnOrder"} />
              </AddToCart>
            </ButtonWrapper>
          </PopUpContainer>
        </div>
      )}

      <TableWrapper>
        <Table>
          <thead>
            <TRow>
              <THead>
                <Text id="pName" />
              </THead>
              <THead>
                <Text id="pDiameter" />
              </THead>
              <THead>
                <Text id="pThickness" />
              </THead>
              {/* <THead>
                <Text id="pProducer" />
              </THead> */}
              <THead>
                <Text id="pMass" />
              </THead>
              <THead
                style={{ cursor: "pointer" }}
                onClick={() => setIsCash(!isCash)}
              >
                <PriceToggleWrapper>
                  <PriceToggle active={isCash}>
                    <Text id="pPrice1" />
                  </PriceToggle>
                  <PriceToggle active={!isCash}>
                    <Text id="pPrice2" />
                  </PriceToggle>
                </PriceToggleWrapper>
              </THead>
              <THead>
                <Text id="pLength" />
              </THead>
              <THead>
                <Text id="addToCart" />
              </THead>
            </TRow>
          </thead>
          <tbody>
            {products.success &&
              products?.data?.content?.map((product) => {
                const {
                  id,
                  name,
                  diameter,
                  thickness,
                  price1,
                  price2,
                  mass,
                  length,
                  supplier,
                } = product;
                return (
                  <TRow key={id}>
                    <TData>{name}</TData>
                    <TData>{diameter}</TData>
                    <TData>{thickness}</TData>
                    {/* <TData>{supplier}</TData> */}
                    <TData>{mass}</TData>
                    <TData style={{ transitionDuration: 1 }}>
                      {thousandSeparator(isCash ? price1 : price2)} uzs
                    </TData>
                    <TData>{length}</TData>
                    <TData>
                      <AddToCartButton
                        onClick={() => {
                          setAddToCartProd({ popUp: true, data: product });
                        }}
                      >
                        <CartIcon />
                      </AddToCartButton>
                    </TData>
                  </TRow>
                );
              })}
          </tbody>
        </Table>
        {products.loading && <Loading />}
        {products.error && <ErrorBox />}
        {products.success && products?.data?.content?.length === 0 && (
          <EmptyBox item="productItem" />
        )}
      </TableWrapper>
      {products?.data?.content?.length > 0 && (
        <Pagination
          size="small"
          style={{
            margin: "20px auto 20px",
            width: "fit-content",
            paddingBottom: "20px",
          }}
          onChange={(e) => {
            setPage(e - 1);
            dispatch(getProductAction(e - 1, size, category, ""));
          }}
          current={page + 1}
          total={products.data.totalElements}
          mountNode
        />
      )}
    </div>
  );
}

export default ProductTable;
