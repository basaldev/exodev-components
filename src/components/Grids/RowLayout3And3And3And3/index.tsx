import React, { FunctionComponent, ReactNode } from 'react';
import { Grid } from '@material-ui/core';

interface IProps {
  farLeftComponent: ReactNode;
  leftOfCenterComponent: ReactNode;
  rightOfCenterComponent: ReactNode;
  farRightComponent: ReactNode;
}

/**
 * RowLayout3/And3And3And3
 *
 * Material Design’s responsive UI is based on a 12-column grid layout.
 * xs, extra-small: 0px or larger
 * sm, small: 600px or larger
 */
const RowLayout3And3And3And3: FunctionComponent<IProps> = (props: IProps) => {
  const {
    farLeftComponent,
    leftOfCenterComponent,
    rightOfCenterComponent,
    farRightComponent,
  } = props;

  return (
    <>
      <Grid container direction="row" justify="space-between">
        <Grid item xs={12} sm={3}>
          {/* Far Left 3 / 12 width */}
          {farLeftComponent}
        </Grid>
        <Grid item xs={12} sm={3}>
          {/* Left of Center 3 / 12 width */}
          {leftOfCenterComponent}
        </Grid>
        <Grid item xs={12} sm={3}>
          {/* Right of Center 3 / 12 width */}
          {rightOfCenterComponent}
        </Grid>
        <Grid item xs={12} sm={3}>
          {/* Far Right 3 / 12 width */}
          {farRightComponent}
        </Grid>
      </Grid>
    </>
  );
};

export default RowLayout3And3And3And3;
