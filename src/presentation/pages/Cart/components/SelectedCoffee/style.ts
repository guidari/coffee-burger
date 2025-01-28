import styled from "styled-components";

export const SelectedCoffeeContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 8fr;
  align-items: flex-start;
  gap: 20px;
  /* background-color: red; */
  padding: 24px 0;
  border-bottom: 1px solid ${(props) => props.theme["base-button"]};
`;

export const ContainerNamePrice = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    color: ${(props) => props.theme["base-text"]};

    font-weight: 700;
  }
  @media only screen and (max-width: 992px) {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 8px;
  }
`;

export const SelectedCoffeeImage = styled.div`
  img {
    width: 64px;
    height: 64px;
    border-radius: 5%;
  }
`;

export const SelectedQuantityCoffee = styled.div`
  max-width: 100px;
`;

export const SelectedPriceCoffee = styled.div``;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ActionButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  max-height: 32px;
`;

export const RemoveCoffee = styled.button`
  background-color: ${(props) => props.theme["base-button"]};
  text-transform: uppercase;

  display: flex;
  gap: 4px;
  padding: 10px 8px;

  span {
    font-weight: 400;
    font-size: 12px;
    line-height: 160%;

    color: ${(props) => props.theme["base-text"]};
  }

  &:hover {
    opacity: 0.8;
  }
`;
