import type { PropsWithChildren } from "react";
import * as Styles from "./AppContainer.styles";

interface IAppContainerProps
  extends PropsWithChildren,
    React.HTMLAttributes<HTMLDivElement> {
  isHeader?: boolean;
}

export const AppContainer = ({
  children,
  isHeader,
  ...rest
}: IAppContainerProps) => (
  <Styles.Container $isHeader={isHeader} {...rest}>
    {children}
  </Styles.Container>
);
