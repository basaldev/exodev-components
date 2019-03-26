import React, { FunctionComponent } from 'react';
import { Typography } from '@material-ui/core';
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles';

const styles = createStyles({
  root: {
    color: 'rgb(0, 174, 239)',
    fontWeight: 700,
    lineHeight: 1,
  },
});

interface IProps extends WithStyles<typeof styles> {
  size: 'medium' | 'large';
  text: string;
}

/**
 * Exponential Transformation Book Card Headline
 */
const EXTCardHeadline: FunctionComponent<IProps> = (props: IProps) => {
  const { classes, size, text } = props;
  return (
    <Typography
      classes={{
        root: classes.root,
      }}
      style={{ fontSize: size === 'large' ? 70 : 45 }}
      variant={size === 'large' ? 'h1' : 'h2'}
    >
      {text}
    </Typography>
  );
};

export default withStyles(styles)(EXTCardHeadline);
