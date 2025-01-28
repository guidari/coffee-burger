import styled from "styled-components";

export const ButtonAction = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  width: 100%;
  border: 0;
  padding: 0.5rem;
  border-radius: 8px;

  background-color: ${(props) => props.theme["purple-light"]};

  img {
    width: 22px;
    height: 22px;

    color: ${(props) => props.theme["purple-dark"]};
  }

  span {
    font-size: 14px;
    color: ${(props) => props.theme["purple"]};
  }
`;
