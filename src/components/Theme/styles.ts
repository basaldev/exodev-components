import { getButtonTheme } from '../Button/styles';
import { getCheckBoxTheme } from '../CheckBox/styles';
import { getTextInputTheme } from '../TextInput/styles';

const colors = {
  dark: ['#333333', '#555555', '#777777', '#999999', '#999999', '#999999'],
  light: ['#F8F8F8', '#F2F2F2', '#EDEDED', '#DADADA', '#DADADA', '#DADADA'],
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
  status: {
    critical: '#FF4040',
    error: '#FF4040',
    warning: '#FFAA15',
    ok: '#00C781',
    unknown: '#CCCCCC',
    disabled: '#CCCCCC',
  },
};

const text = {
  xxsmall: { size: '10px', height: '1.2', maxWidth: '100px' },
  xsmall: { size: '12px', height: '1.3', maxWidth: '200px' },
  small: { size: '14px', height: '1.5', maxWidth: '300px' },
  medium: { size: '16px', height: '1.5', maxWidth: '400px' },
  large: { size: '18px', height: '1.5', maxWidth: '400px' },
  xlarge: { size: '20px', height: '1.5', maxWidth: '400px' },
  xxlarge: { size: '22px', height: '1.5', maxWidth: '400px' },
  xxxlarge: { size: '24px', height: '1.5', maxWidth: '400px' },
};

const variables = { colors, text };

/**
 * Refer to below to know each variable
 * https://github.com/grommet/grommet/blob/master/src/js/themes/base.js#L106
 */
export const exoTheme = {
  global: {
    colors: {
      brand: colors.dark[0],
      focus: colors.light[4],
    },
    font: {
      family:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",  "Helvetica Neue", Arial, sans-serif,  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    },
  },
  text,
  button: getButtonTheme(variables),
  checkBox: getCheckBoxTheme(variables),
  textInput: getTextInputTheme(variables),
};
