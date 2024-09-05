// theme.d.ts
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    breakpoints: {
      mobile: number;
      mobileLarge: number;
      tablet: number;
      desktop: number;
      largeDesktop: number;
    };
  }
}
