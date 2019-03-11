import * as React from 'react';
import {
  Paragraph as GrommetParagraph,
  ParagraphProps,
} from 'grommet/components/Paragraph';

export interface IProps {
  size?: string;
  children: string;
}

type Props = ParagraphProps & JSX.IntrinsicElements['div'] & IProps;

/**
 * Paragraph description
 * https://v2.grommet.io/paragraph
 */
const Paragraph: React.SFC<Props> = (props: Props) => {
  return <GrommetParagraph {...props} />;
};

export default Paragraph;
