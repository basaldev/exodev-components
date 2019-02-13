import * as React from 'react';
import { Box, Heading, Paragraph } from 'grommet';
/**
 * Button description
 */
interface IProps {
  heading: string;
  text: string;
  background?: string | { color: string, image: string };
  children?: any;
}

/**
 * Hero description
 */
const Hero: React.SFC<IProps> = (props: IProps) =>
  // TODO: Add responsive with styled
  <Box
    as="section"
    background={props.background || 'light-1'}
    direction="column"
    pad={{ horizontal: "xlarge" }}
    height="100vh"
    justify="center"
    >
    <Box alignSelf="start">
    <Heading margin="none">{props.heading}</Heading>
    <Paragraph >{props.text}</Paragraph>
    {props.children}
    </Box>
  </Box>;

export default Hero;
