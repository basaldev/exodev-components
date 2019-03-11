import * as React from 'react';
import {
  Heading as GrommetHeading,
  HeadingProps,
} from 'grommet/components/Heading';

export interface IProps {
  children: string;
}

type Props = HeadingProps & JSX.IntrinsicElements['div'] & IProps;

/**
 * Heading description
 * https://v2.grommet.io/heading
 */
const Heading: React.SFC<Props> = (props: Props) => {
  return <GrommetHeading {...props} />;
};

export default Heading;
