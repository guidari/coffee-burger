import styled from "styled-components";

export const InputCountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 9px 8px;
  gap: 4px;

  width: 72px;
  height: 38px;

  background: ${(props) => props.theme["base-button"]};
  border-radius: 8px;

  button {
    cursor: pointer;
    color: ${(props) =>
      props.theme.title === "light"
        ? props.theme.purple
        : props.theme["purple-dark"]};

    background-color: transparent;
    border-color: transparent;
    border: none;
  }

  input {
    width: 1.25rem;
    background: transparent;
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 1rem;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;
