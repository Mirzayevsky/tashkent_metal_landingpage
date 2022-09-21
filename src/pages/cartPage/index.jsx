import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  Container,
  Table,
  TableWrapper,
  TData,
  THead,
  TRow,
} from "../../components/styles/styles";
import Text from "../../language/langManager";
import { cleanCart, removeFromCart } from "../../redux/modules/cart/cartAction";
import { getProductsByIdsAction } from "../../redux/modules/getProductsByIds";
import {
  ButtonWrapper,
  CartTitle,
  CleanButton,
  ClosePopUp,
  DeleteFromCart,
  OrderButton,
  PopUpInput,
  PopUpInputPhoneNumber,
  PopUpInputTitle,
  PopUpTitle,
  SendButton,
} from "./styles";

import { ReactComponent as X } from "../../assets/icon/x.svg";
import { useState } from "react";
import {
  PopUpBackground,
  PopUpContainer,
} from "../../components/productTable/styles";
import axios from "axios";
import { baseUrl } from "../../constants/link";
import { httpRequest } from "../../utils/httpRequest";
import { toast } from "react-toastify";
import EmptyBox from "../../components/emptyBox";
import Loading from "../../components/loadingBox";
import ErrorBox from "../../components/errorBox";

function CartPage() {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    const ids = cart?.map((item) => item.productId);
    // if (ids.length > 0) {
    if (ids) {
      dispatch(getProductsByIdsAction(ids));
    }
    // }
  }, [cart]);

  useEffect(() => {
    // window.location.reload();
  }, []);

  const productsByIds = useSelector((state) => state.productsByIds);

  const [makeOrderPopUp, setMakeOrderPopUp] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const[style, setStyle] =useState({})

 

  //  const changeNameHandler = (e) =>{
  //    let elIn

  //  }

  const submitOrder = (e) => {
    e.preventDefault();
    const {
      fullName: { value: fullName },
      // phoneNumber: { value: phoneNumber },
    } = e.target;

    let style ={}

    if(phoneNumber === ""){
       style = {
        border:"2px solid red"
      }
    }
    else{
       style ={
        border:"2px solid green"
      }
    }
    setStyle(style)


    if (fullName && phoneNumber) {
      const orderData = {
        fullName,
        phoneNumber,
        products: cart,
        orderSource: "WEBSITE",
        orderProcess: "VERIFICATION",
      };

      httpRequest({
        method: "POST",
        path: "orders",
        data: orderData,
      })
        .then((res) => {
          console.log(res);
          dispatch(cleanCart());
          setMakeOrderPopUp(false);
          toast.success("Заказ успешно отправлен");
        })
        .catch((err) => {
          console.log(err);
          toast.error("что-то пошло не так");
        });
    }
  };


  return (
    <Container>
      {makeOrderPopUp && (
        <>
          <PopUpBackground />
          <PopUpContainer>
            <ClosePopUp
              onClick={() => {
                setMakeOrderPopUp(false);
              }}
            >
              <X />
            </ClosePopUp>
            <form onSubmit={submitOrder}>
              <PopUpTitle>
                <Text id="fillForm" />
              </PopUpTitle>
              <PopUpInputTitle>
                <Text id="fullName"  />
              </PopUpInputTitle>
              <PopUpInput
                id="popInput"
                type="text"
                name="fullName"
                placeholder="Ivanov Ivan Ivanovich"
                required
              />
              <PopUpInputTitle>
                <Text id="phoneNumber"  required  />
              </PopUpInputTitle>
              <PopUpInputPhoneNumber
                 style={style}
                // style={{phoneNumber =="" ? {border: '2px solid red'} : ""}
                allowEmptyFormatting
                format="+998(##) ###-##-##"
                mask="_"
                placeholder="+998 (90) 123-45-67"
                name="phoneNumber"

                onValueChange={(e) => {
                  setPhoneNumber(e.value);
                }}
                value={phoneNumber}
                 required
              />
              <SendButton>
                <Text id="submit" />
              </SendButton>
            </form>
          </PopUpContainer>
        </>
      )}

      <CartTitle>
        <Text id="cart" />
      </CartTitle>
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
              <THead>
                <Text id="pPrice1" />
              </THead>
              <THead>
                <Text id="pLength" />
              </THead>
              <THead>
                <Text id="pSelectedLength" />
              </THead>
              <THead>
                <Text id="deleteFromCart" />
              </THead>
            </TRow>
          </thead>
          <tbody>
            {productsByIds?.data?.map(
              ({
                id,
                name,
                diameter,
                thickness,
                price1,
                price2,
                mass,
                length,
                supplier,
              }) => (
                <TRow key={id}>
                  {/* <TData>{id}</TData> */}
                  <TData>{name}</TData>
                  <TData>{diameter}</TData>
                  <TData>{thickness}</TData>
                  {/* <TData></TData> */}
                  <TData>{mass}</TData>
                  <TData>{price1}</TData>
                  <TData>{length}</TData>
                  {/* <TData>{length}</TData>
                <TData>{length}</TData> */}
                  <TData>
                    {cart.find((item) => item.productId === id)?.amount}
                  </TData>
                  <TData>
                    <DeleteFromCart
                      onClick={() => dispatch(removeFromCart(id))}
                    >
                      <X />
                    </DeleteFromCart>
                  </TData>
                </TRow>
              )
            )}
          </tbody>
          {productsByIds.data.length > 0 && (
            <tfoot>
              <TRow>
                <TData>
                  <b>{productsByIds.data.length}</b>
                </TData>
                <TData></TData>
                <TData></TData>
                <TData>
                  <b>
                    {productsByIds.data
                      .reduce((t, v) => {
                        return (
                          t +
                          v.mass *
                            Number(
                              cart.find((item) => item.productId === v.id)
                                ?.amount
                            )
                        );
                      }, 0)
                      .toFixed(2)}
                  </b>
                </TData>
                <TData>
                  <b>
                    {productsByIds.data.reduce((t, v) => {
                      return (
                        t +
                        v.price1 *
                          Number(
                            cart.find((item) => item.productId === v.id)?.amount
                          )
                      );
                    }, 0)}
                  </b>
                </TData>
                <TData></TData>
                {/* <TData></TData> */}
                <TData>
                  <b>
                    {productsByIds.data.reduce(
                      (t, v) =>
                        t +
                        Number(
                          cart.find((item) => item.productId === v.id)?.amount
                        ),
                      0
                    )}
                  </b>
                </TData>
                <TData></TData>
              </TRow>
            </tfoot>
          )}
        </Table>
      </TableWrapper>
      {productsByIds?.loading && <Loading />}
      {productsByIds.error && <ErrorBox />}
      {productsByIds?.success && productsByIds?.data?.length === 0 && (
        <EmptyBox cart item="productItem" />
      )}
      {productsByIds?.data?.length > 0 && (
        <ButtonWrapper>
          <CleanButton onClick={() => dispatch(cleanCart())}>
            <Text id="cleanOrder" />
          </CleanButton>
          <OrderButton onClick={() => setMakeOrderPopUp(true)}>
            <Text id="makeAnOrder" />
          </OrderButton>
        </ButtonWrapper>
      )}
    </Container>
  );
}

export default CartPage;
