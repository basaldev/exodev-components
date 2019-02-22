import { css } from 'styled-components';

/**
 * Refer to below to know each variable
 * https://github.com/grommet/grommet/blob/master/src/js/themes/base.js#L776
 */
export const getTextInputTheme = ({ colors }) => ({
  extend: css`
    font-weight: normal;
    border-radius: 8px;
    border-color: ${(props: any) =>
      props.inverse ? colors.transparent : 'rgba(0, 0, 0, 0.33)'};
    background-color: ${(props: any) =>
      props.inverse ? 'rgba(255, 255, 255, 0.7)' : colors.transparent};
  `,
});
