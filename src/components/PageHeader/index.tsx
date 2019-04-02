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
  const { subtitleText, titleText } = props;
  const styles = getStyles(props);
  return (
    <Grid
      container
      direction="column"
      justify="space-between"
      className={styles.container}
    >
      <Grid item>
        <Typography align="center" className={styles.title}>
          {titleText}
        </Typography>
        <Typography align="center" className={styles.title}>
          {subtitleText}
        </Typography>
      </Grid>
    </Grid>
  );
};

const getStyles = (props) => {
  return {
    title: css`
      font-size: ${designUnits(10)}px;
      margin-bottom: ${designUnits(6)}px;
      font-weight: bold;
      color: white;
      line-height: 1;
    `,
    subtitle: css`
      font-size: ${designUnits(4)}px;
      color: white;
      font-size: 500;
    `,
    container: css`
      background-image: url(${props.backgroundImage});
      padding-top: ${designUnits(15)}px;
      padding-bottom: ${designUnits(10)}px;
      background-attachment: fixed;
      background-size: cover;
      background-position: 50% 50%;
    `,
  };
};

export default PageHeader;
