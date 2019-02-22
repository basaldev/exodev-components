import * as React from 'react';
import {
  CheckBox as GrommetCheckBox,
  CheckBoxProps,
} from 'grommet/components/CheckBox';

export interface IProps {
  checked: boolean;
  label?: string;
  onChange?: (event: any) => void;
}

type Props = CheckBoxProps & JSX.IntrinsicElements['input'] & IProps;

/**
 * CheckBox description
 * https://v2.grommet.io/checkbox
 */
const CheckBox: React.SFC<Props> = (props: Props) => {
  return <GrommetCheckBox {...props} />;
};

export default CheckBox;
