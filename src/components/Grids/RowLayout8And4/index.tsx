import React, { FunctionComponent, ReactNode } from 'react';
import { Grid } from '@material-ui/core';

interface IProps {
  leftComponent: ReactNode;
  rightComponent: ReactNode;
}

/**
 * RowLayout8And4
 *
 * Material Design’s responsive UI is based on a 12-column grid layout.
 * xs, extra-small: 0px or larger
 * sm, small: 600px or larger
 *
 * This layout component renders two input components side by side if the viewport
 * is 600px or wider, with the left component taking 2/3 of the width, and the right component
 * taking 1/3 of the width. If the viewport is less than 600px wide, the input components
 * are rendered one above the other, both taking full width.
 */
const RowLayout8And4: FunctionComponent<IProps> = (props: IProps) => {
  const { leftComponent, rightComponent } = props;

  return (
    <>
      <Grid container direction="row" justify="space-between">
        <Grid item xs={12} sm={8}>
          {/* Left Side 8 / 12 width */}
          {leftComponent}
        </Grid>
        <Grid item xs={12} sm={4}>
          {/* Right Side 4 / 12 width */}
          {rightComponent}
        </Grid>
      </Grid>
    </>
  );
};

export default RowLayout8And4;
