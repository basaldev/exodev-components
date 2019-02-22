import * as React from 'react';
import {
  Button as GrommetButton,
  ButtonProps,
} from 'grommet/components/Button';

export interface IProps {
  label: string;
  color?: string;
  onClick?: (event: any) => void;
}

type Props = ButtonProps & JSX.IntrinsicElements['button'] & IProps;

/**
 * Button description
 * https://v2.grommet.io/button
 */
const Button: React.SFC<Props> = (props: Props) => {
  return <GrommetButton {...props} />;
};

export default Button;
