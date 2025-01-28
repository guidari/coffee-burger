import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Router } from "../router/appRouter";

import { GlobalStyle } from "../../styles/global";
import { defaultTheme } from "../../styles/themes/default";
import { ShoppingCartProvider } from "../../context/ShoppingCartContext";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ShoppingCartProvider>
          <Router />
        </ShoppingCartProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}
