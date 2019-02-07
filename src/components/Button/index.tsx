
import * as React from 'react';
import * as Grommet from 'grommet/components/Button';

/**
 * Button description
 */
interface IProps {
  /** label description */
  label: string;
}

/**
 * Button description
 */
const Button: React.SFC<IProps> = ({ label }) =>
  <Grommet.Button label={label} />;

export default Button;
