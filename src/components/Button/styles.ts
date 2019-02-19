import { css } from 'styled-components';

/**
 * Refer to below to know each variable
 * https://github.com/grommet/grommet/blob/master/src/js/themes/base.js#L106
 */
export const getButtonTheme = ({ colors }) => ({
  border: {
    color: { light: colors.dark[0] },
    radius: '30px',
  },
  minWidth: '190px',
  padding: {
    vertical: '15px',
    horizontal: '25px',
  },
  extend: css`
    color: ${(props: any) => colors[props.colorValue] || colors.dark[0]}
    font-weight: bold;
  `,
});
