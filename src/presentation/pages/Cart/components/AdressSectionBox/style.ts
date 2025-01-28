import styled from "styled-components";

export const AdressBoxContainer = styled.div``;

export const Instrunctions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  gap: 8px;
  margin-bottom: 32px;

  h3 {
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const AdressForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Grid1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 12px;
  @media only screen and (max-width: 1280px) {
    grid-template-columns: 1fr;
  }
`;

export const Grid2 = styled.div`
  display: grid;
  grid-template-columns: 3fr 7fr;
  gap: 12px;
  @media only screen and (max-width: 1280px) {
    grid-template-columns: 1fr;
  }
`;

export const Grid3 = styled.div`
  display: grid;
  grid-template-columns: 3fr 5fr 2fr;
  gap: 12px;
  @media only screen and (max-width: 1280px) {
    grid-template-columns: 1fr;
  }
`;
