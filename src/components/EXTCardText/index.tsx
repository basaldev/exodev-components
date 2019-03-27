import React, { FunctionComponent } from 'react';
import { Typography } from '@material-ui/core';
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles';

const styles = createStyles({
  root: {
    color: 'rgb(74, 74, 74)',
    fontSize: 16,
    fontWeight: 300,
    lineHeight: '24px',
  },
});

interface IProps extends WithStyles<typeof styles> {
  text: string;
}

interface IProps {
  text: string;
}

/**
 * Exponential Transformation Book Card Text
 */
const EXTCardText: FunctionComponent<IProps> = (props: IProps) => {
  const { classes, text } = props;
  return (
    <Typography
      classes={{
        root: classes.root,
      }}
      variant={'h2'}
    >
      {text}
    </Typography>
  );
};

export default withStyles(styles)(EXTCardText);
