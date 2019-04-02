import React, { FunctionComponent } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { css } from 'emotion';
import { designUnits } from '../Themes/index';
interface IProps {
  titleText: string;
  subtitleText: string;
  backgroundImage: string;
}

/**
 * TitleSubtitleParagraphButton
 */
const PageHeader: FunctionComponent<IProps> = (props: IProps) => {
  const { subtitleText, titleText, backgroundImage } = props;
  return (
    <Grid
      container
      direction="column"
      justify="space-between"
      className={css`
        background-image: url(${backgroundImage});
        padding-top: ${designUnits(15)}px;
        padding-bottom: ${designUnits(10)}px;
        background-attachment: fixed;
        background-size: cover;
        background-position: 50% 50%;
      `}
    >
      <Grid item>
        <Typography
          align="center"
          className={css`
            font-size: ${designUnits(10)}px;
            margin-bottom: ${designUnits(6)}px;
            font-weight: bold;
            color: white;
            line-height: 1;
          `}
        >
          {titleText}
        </Typography>
        <Typography
          align="center"
          className={css`
            font-size: ${designUnits(4)}px;
            color: white;
            font-size: 500;
          `}
        >
          {subtitleText}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default PageHeader;
