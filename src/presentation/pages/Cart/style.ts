import styled from "styled-components";

export const CartContainer = styled.div`
  display: grid;
  grid-template-columns: 6fr 4fr;
  /* width: 100%; */

  gap: 32px;

  @media only screen and (max-width: 992px) {
    display: flex;
    flex-direction: column;
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 130%;
  margin-bottom: 15px;
  color: ${(props) => props.theme["base-subtitle"]};
  font-family: "Baloo 2";
`;

export const BoxSection = styled.div`
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 8px;
  padding: 40px;
  margin-bottom: 12px;
  @media only screen and (max-width: 992px) {
    padding: 20px;
  }
`;
