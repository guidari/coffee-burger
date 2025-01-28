import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration:none;
    color: inherit;
  }

  /* :focus {
    outline: none;
  } */

  body {
    background: ${(props: any) => props.theme.background};
    color: ${(props: any) => props.theme["gray-300"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
  button {
    /* outline:0; */
    border:0;
    cursor: pointer;
  }
`;
