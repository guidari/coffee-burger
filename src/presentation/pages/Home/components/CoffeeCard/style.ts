import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  background-color: ${(props) => props.theme["base-card"]};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  position: relative;
  padding: 20px 20px;
  border-radius: 6px 36px;
  margin-bottom: 24px;

  @media only screen and (max-width: 992px) {
    margin-top: 30px;
  }
`;

export const Coffeeonatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70px;
`;

export const CoffeeImage = styled.img`
  width: 120px;
  height: 120px;

  border-radius: 5%;
  position: absolute;
  top: -30px;
`;

export const CoffeeType = styled.div`
  font-weight: 700;
  font-size: 10px;
  line-height: 130%;
  /* identical to box height, or 13px */

  text-transform: uppercase;
  color: ${(props) => props.theme["yellow-dark"]};
  background-color: ${(props) => props.theme["yellow-light"]};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  gap: 4px;

  border-radius: 100px;

  /* width: 50px; */

  height: 21px;
  top: 112px;
`;

export const CoffeeTagsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Title = styled.span`
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;

  display: flex;
  align-items: flex-end;
  text-align: center;

  color: ${(props) => props.theme["base-title"]};
`;

export const SubTitle = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;

  text-align: center;
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const OrderPirceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`;

export const PriceTag = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: ${(props) => props.theme["base-text"]};

  span {
    font-weight: 800;
    font-size: 24px;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const QuantityOrder = styled.input``;

export const CartQuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    width: 38px;
    height: 38px;
  }
`;
