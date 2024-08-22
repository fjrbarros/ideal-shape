import { ThemeProvider } from "@providers";
import { render, type RenderOptions } from "@testing-library/react";
import type { ReactElement } from "react";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });
