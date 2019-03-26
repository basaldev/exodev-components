import * as React from 'react';
import MuiButton from '@material-ui/core/Button';

export interface IProps {
  label: string;
  onClick?: (event: any) => void;
}

type Props = JSX.IntrinsicElements['button'] & IProps;

/**
 * Button description
 * https://v2.grommet.io/button
 */
const Button: React.SFC<Props> = (props: Props) => {
  return (
    <div>
      <MuiButton onClick={props.onClick}>{props.label}</MuiButton>
    </div>
  );
};

export default Button;
