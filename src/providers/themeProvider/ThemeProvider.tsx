import type { PropsWithChildren } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyle";

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const breakpoints = {
    mobile: 320,
    tablet: 768,
    desktop: 1024,
  };

  return (
    <StyledThemeProvider theme={{ breakpoints }}>
      <GlobalStyles />
      {children}
    </StyledThemeProvider>
  );
};
