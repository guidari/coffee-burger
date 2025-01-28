import styled from "styled-components";

export const InputText = styled.input`
  background-color: ${(props) => props.theme["base-input"]};
  color: ${(props) => props.theme["base-text"]};

  padding: 12px;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme["base-button"]};
`;

export const InputAdressContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ErrorMessageStyleContainer = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 8px;
`;
