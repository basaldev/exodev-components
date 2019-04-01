import React, { FunctionComponent, ReactElement } from 'react';
import { Grid } from '@material-ui/core';

interface IProps {
  middleComponent: ReactElement;
  widthOutOf12: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

const RowLayout1Centered: FunctionComponent<IProps> = (props: IProps) => {
  const { middleComponent, widthOutOf12 } = props;
  return (
    <div>
      <Grid container direction="row" alignContent="center" justify="center">
        <Grid item xs={12} sm={widthOutOf12}>
          {middleComponent}
        </Grid>
      </Grid>
    </div>
  );
};

export default RowLayout1Centered;
