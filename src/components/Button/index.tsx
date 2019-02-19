import * as React from 'react';
import {
  Button as GrommetButton,
  ButtonProps,
} from 'grommet/components/Button';

export interface IProps {
  label: string;
  fill?: boolean;
  alignSelf?: string;
}

type NewButton = ButtonProps & JSX.IntrinsicElements['button'] & IProps;

/**
 * Button description
 * https://v2.grommet.io/button
 */
const Button: React.SFC<NewButton> = (props: NewButton) => {
  return <GrommetButton {...props} />;
};

export default Button;
