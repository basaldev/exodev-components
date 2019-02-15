import * as React from 'react';
import {
  Button as GrommetButton,
  ButtonProps,
} from 'grommet/components/Button';

/**
 * Button description
 */
type ExtraButton = any;
type NewButton = ButtonProps & JSX.IntrinsicElements['button'] & ExtraButton;

/**
 * Button description
 */
const Button: React.SFC<NewButton> = (props: NewButton) => {
  return <GrommetButton {...props} />;
};

export default Button;
