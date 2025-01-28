import styled from "styled-components";

export const InfoTextGridDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  span {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;

    flex: none;
    order: 1;
    flex-grow: 1;

    color: ${(props) => props.theme["base-text"]};
  }
`;
