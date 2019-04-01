import React, { FunctionComponent, ReactElement } from 'react';
import { Grid } from '@material-ui/core';

interface IProps {
  leftComponent: ReactElement;
  rightComponent: ReactElement;
}

const RowLayout6And6: FunctionComponent<IProps> = (props: IProps) => {
  const { leftComponent, rightComponent } = props;
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={6}>
          {leftComponent}
        </Grid>
        <Grid item xs={12} sm={6}>
          {rightComponent}
        </Grid>
      </Grid>
    </div>
  );
};

export default RowLayout6And6;
