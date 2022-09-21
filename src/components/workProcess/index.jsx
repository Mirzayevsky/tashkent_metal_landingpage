import React from "react";
import Text from "../../language/langManager";
import {
  Container,
  DFlex,
  PageNumber,
  SectionTitle,
  SectionTitleDark,
} from "../styles/styles";
import {
  CardBox,
  CardImgPart,
  CardTextPart,
  CardWrapper,
  WorkProcessWrapper,
} from "./styles";
import order from "../../assets/icon/order.svg";
import contract from "../../assets/icon/contract.svg";
import payment from "../../assets/icon/payment.svg";
import delivery from "../../assets/icon/delivery.svg";

function WorkProcess() {
  const workProcess = [
    {
      img: order,
      title: <Text id="order" />,
      number: 1,
      text: <Text id="workProcess1" />,
    },
    {
      img: contract,
      title: <Text id="contract" />,
      number: 2,
      text: <Text id="workProcess2" />,
    },
    {
      img: payment,
      title: <Text id="payment" />,
      number: 3,
      text: <Text id="workProcess3" />,
    },
    {
      img: delivery,
      title: <Text id="delivery" />,
      number: 4,
      text: <Text id="workProcess4" />,
    },
  ];

  return (
    <WorkProcessWrapper>
      <Container>
        <SectionTitle>
          <Text id="processWork" />
        </SectionTitle>
        <CardWrapper h="space-between" style={{ marginTop: "84px" }}>
          {workProcess.map(({ img, title, number, text }, index) => (
            <CardBox key={index}>
              <CardImgPart>
                <img src={img} alt={title} />
                <span>{title}</span>
              </CardImgPart>
              <CardTextPart>
                <p className="number">{number}</p>
                <p className="desc">{text}</p>
              </CardTextPart>
            </CardBox>
          ))}
        </CardWrapper>
      </Container>
      <PageNumber>05</PageNumber>
    </WorkProcessWrapper>
  );
}

export default WorkProcess;
