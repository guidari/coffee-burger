import styled from "styled-components";

export const CartPreviewContainer = styled.div`
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px 44px;
  padding: 40px;
  margin-bottom: 12px;

  @media only screen and (max-width: 992px) {
    padding: 20px;
  }
`;

export const EmptyCart = styled.h3`
  padding-bottom: 24px;

  border-bottom: 1px solid ${(props) => props.theme["base-button"]};
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 130%;
  margin-bottom: 15px;
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const CartPreviewPriceSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 24px;
`;
export const CartPriceSummary = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme["base-text"]};
`;
export const CartTotalPrice = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const CartConfirmButton = styled.button`
  display: flex;
  justify-content: center;
  margin-top: 24px;

  width: 100%;
  cursor: pointer;
  padding: 12px 8px;

  border: 0;
  padding: 0.5rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme["yellow"]};
  color: ${(props) => props.theme.white};
  p {
    font-weight: 700;
    font-size: 14px;
    line-height: 160%;

    text-transform: uppercase;

    font-stretch: 100;
  }
`;
