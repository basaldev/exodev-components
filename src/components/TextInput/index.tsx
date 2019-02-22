import * as React from 'react';
import {
  TextInput as GrommetTextInput,
  TextInputProps,
} from 'grommet/components/TextInput';

export interface IProps {
  inverse?: boolean;
  value: string;
  onChange?: (event: any) => void;
}

type Props = TextInputProps & JSX.IntrinsicElements['input'] & IProps;

/**
 * TextInput description
 * https://v2.grommet.io/textinput
 */
const TextInput: React.SFC<Props> = (props: Props) => {
  return <GrommetTextInput {...props} />;
};

export default TextInput;
