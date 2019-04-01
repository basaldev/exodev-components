import React, { FunctionComponent, ReactElement } from 'react';
import { Grid } from '@material-ui/core';

interface IProps {
  leftComponent: ReactElement;
  middleComponent: ReactElement;
  rightComponent: ReactElement;
}

const RowLayout4And4And4: FunctionComponent<IProps> = (props: IProps) => {
  const { leftComponent, middleComponent, rightComponent } = props;
  return (
    <div>
      <Grid
        container
        direction="row"
        alignContent="center"
        justify="space-between"
      >
        <Grid item xs={12} sm={4}>
          {leftComponent}
        </Grid>
        <Grid item xs={12} sm={4}>
          {middleComponent}
        </Grid>
        <Grid item xs={12} sm={4}>
          {rightComponent}
        </Grid>
      </Grid>
    </div>
  );
};

export default RowLayout4And4And4;
