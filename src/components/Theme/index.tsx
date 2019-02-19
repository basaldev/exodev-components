import React from 'react';
import { Grommet } from 'grommet/components/Grommet';
import { exoTheme } from './styles';

interface IProps {
  children: any;
}

export const Theme: React.SFC<IProps> = ({ children }) => (
  <Grommet theme={exoTheme}>{children}</Grommet>
);
