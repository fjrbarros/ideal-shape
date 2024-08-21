import type { PropsWithChildren } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyle";

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <StyledThemeProvider theme={{}}>
      <GlobalStyles />
      {children}
    </StyledThemeProvider>
  );
};
