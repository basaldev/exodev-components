import React from 'react';
import { Grommet } from 'grommet/components/Grommet';
import { deepMerge } from 'grommet/utils/object';
import { exoTheme } from './styles';

interface IProps {
  theme?: object;
  children: any;
}

const Theme: React.SFC<IProps> = ({ children, theme }) => (
  <Grommet theme={deepMerge(exoTheme, theme)}>{children}</Grommet>
);

export default Theme;

export const themeDecorator = (storyFn, theme?: object) => (
  <Theme theme={theme}>{storyFn()}</Theme>
);
