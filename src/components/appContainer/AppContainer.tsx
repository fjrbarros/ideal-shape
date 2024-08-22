import type { PropsWithChildren } from "react";
import * as Styles from "./AppContainer.styles";

interface IAppContainerProps
  extends PropsWithChildren,
    React.HTMLAttributes<HTMLDivElement> {}

export const AppContainer = ({ children, ...rest }: IAppContainerProps) => (
  <Styles.Container {...rest}>{children}</Styles.Container>
);
