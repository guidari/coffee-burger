import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 60%;
  margin: 0 auto;

  @media only screen and (max-width: 1280px) {
    width: 80%;
  }
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`;
