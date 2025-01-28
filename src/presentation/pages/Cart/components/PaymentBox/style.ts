import styled from "styled-components";

export const PaymentBoxContainer = styled.div``;

export const PaymentTypes = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;

  @media only screen and (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
