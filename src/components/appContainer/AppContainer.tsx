import type { PropsWithChildren } from 'react';
import * as Styles from './AppContainer.styles';

interface IAppContainerProps extends PropsWithChildren, React.HTMLAttributes<HTMLDivElement> {
  backgroundColor?: string;
  color?: string;
}

export const AppContainer = ({
  children,
  backgroundColor,
  color = '#ffffff',
  ...rest
}: IAppContainerProps) => (
  <Styles.Container style={{ backgroundColor, color }} {...rest}>
    {children}
  </Styles.Container>
);
