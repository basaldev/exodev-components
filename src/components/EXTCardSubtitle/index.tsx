import React, { FunctionComponent } from 'react';
import { Typography } from '@material-ui/core';
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles';

const styles = createStyles({
  root: {
    color: 'rgb(36, 198, 127)',
    fontWeight: 700,
    lineHeight: 1,
  },
});

interface IProps extends WithStyles<typeof styles> {
  size: 'large' | 'medium';
  text: string;
}

/**
 * Exponential Transformation Book Card Subtitle
 */
const EXTCardSubtitle: FunctionComponent<IProps> = (props: IProps) => {
  const { classes, size, text } = props;
  return (
    <Typography
      classes={{
        root: classes.root,
      }}
      style={{ fontSize: size === 'large' ? 32 : 24 }}
      variant={'h2'}
    >
      {text}
    </Typography>
  );
};

export default withStyles(styles)(EXTCardSubtitle);
