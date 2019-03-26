import React, { FunctionComponent, MouseEvent } from 'react';
import { Button } from '@material-ui/core';
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles';

const styles = createStyles({
  label: {
    fontSize: 16,
    fontWeight: 700,
    lineHeight: '16px',
    textTransform: 'capitalize',
  },
  root: {
    backgroundColor: 'rgb(86, 2, 150)',
    border: 0,
    borderRadius: 0,
    color: 'white',
    margin: '0 0 50px',
    padding: '28px 0 26px',
    width: 277,
  },
});

interface IProps extends WithStyles<typeof styles> {
  label: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

/**
 * Exponential Transformation Book Button
 */
const EXTButton: FunctionComponent<IProps> = (props: IProps) => {
  const { classes, label } = props;
  return (
    <Button
      classes={{
        label: classes.label,
        root: classes.root,
      }}
      onClick={() => alert('EXTButton onClick fired!')}
      variant="contained"
    >
      {label}
    </Button>
  );
};

export default withStyles(styles)(EXTButton);
