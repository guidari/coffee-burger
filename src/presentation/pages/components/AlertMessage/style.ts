import styled, { keyframes } from "styled-components";

interface StatusProps {
  statusColor: string;
}

export const AlertMessageContainer = styled.div<StatusProps>`
  width: 25rem;
  background: ${(props) => props.theme[`${[props.statusColor]}-light`]};

  position: fixed;
  top: 5rem;
  right: 0;
  z-index: 99999;

  padding: 20px 30px;
  border-radius: 8px 0 0 8px;
  border: 1px solid ${(props) => props.theme[props.statusColor]};
  color: ${(props) => props.theme[`${[props.statusColor]}-dark`]};

  @media only screen and (max-width: 992px) {
    top: 2rem;
    width: 90%;
  }
`;
