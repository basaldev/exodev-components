import { getButtonTheme } from '../Button/styles';
import { getCheckBoxTheme } from '../CheckBox/styles';
import { getTextInputTheme } from '../TextInput/styles';
import { getHeadingTheme } from '../Heading/styles';
import { getParagraphTheme } from '../Paragraph/styles';

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
  xxsmall: { size: '10px', height: '1.3', maxWidth: 'none' },
  xsmall: { size: '12px', height: '1.3', maxWidth: 'none' },
  small: { size: '14px', height: '1.3', maxWidth: 'none' },
  medium: { size: '16px', height: '1.5', maxWidth: 'none' },
  large: { size: '18px', height: '1.5', maxWidth: 'none' },
  xlarge: { size: '20px', height: '1.5', maxWidth: 'none' },
  xxlarge: { size: '22px', height: '1.5', maxWidth: 'none' },
  xxxlarge: { size: '24px', height: '1.5', maxWidth: 'none' },
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
  heading: getHeadingTheme(variables),
  paragraph: getParagraphTheme(variables),
};
