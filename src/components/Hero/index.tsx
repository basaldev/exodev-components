import * as React from 'react';
import { Box } from 'grommet/components/Box';
import { ResponsiveContext } from 'grommet/contexts/ResponsiveContext';
import Heading from '../Heading';
import Paragraph from '../Paragraph';

interface IBackground {
  color: string;
  image: string;
}

interface IProps {
  heading: any;
  description: string | any[];
  as?: string;
  background?: string | IBackground;
  height?: string;
  children?: any;
}

const isSmall = (size: string) => size === 'small';

/**
 * Hero description
 */
const Hero: React.SFC<IProps> = (props: IProps) => {
  const {
    heading,
    description,
    as = 'section',
    background = 'light-1',
    height = '100vh',
    children,
  } = props;
  const isLast = (index: number) => index === description.length - 1;
  return (
    <ResponsiveContext.Consumer>
      {(size: string) => (
        <Box
          as={as}
          background={background}
          direction="row"
          align="center"
          pad={{ horizontal: isSmall(size) ? 'medium' : 'xlarge' }}
          height={height}
        >
          <Box direction="row" align="start">
            <Box style={{ flex: 1 }}>
              {typeof heading === 'string' ? (
                <Heading margin="none">{heading}</Heading>
              ) : (
                heading
              )}
              {React.Children.map(description, (item, index) => (
                <Paragraph
                  key={item}
                  margin={isLast(index) ? { bottom: '0' } : '40px auto'}
                >
                  {item}
                </Paragraph>
              ))}
            </Box>
            {children && !isSmall(size) && <Box>{children}</Box>}
          </Box>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};

export default Hero;
