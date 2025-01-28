import styled from "styled-components";

export const OrderInfoContainer = styled.div`
  display: flex;

  @media only screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  width: 100%;
  /* min-width: 450px; */
  max-width: 500px;

  h1 {
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;
    color: ${(props) => props.theme["yellow-dark"]};
    font-family: "Baloo 2";
  }

  h2 {
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;

  padding: 40px;
  margin-top: 40px;

  border: 1px solid ${(props) => props.theme["yellow-dark"]};
  border-radius: 6px 36px;

  @media only screen and (max-width: 992px) {
    padding: 20px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  div {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
  }

  span {
    font-weight: 700;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;

  @media only screen and (max-width: 992px) {
    justify-content: flex-start;
  }

  img {
    width: 492px;
    height: 293px;

    @media only screen and (max-width: 992px) {
      width: 320px;
    }
  }
`;
