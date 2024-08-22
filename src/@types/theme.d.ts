// theme.d.ts
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    breakpoints: {
      mobile: number;
      tablet: number;
      desktop: number;
    };
  }
}
