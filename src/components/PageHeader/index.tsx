import React, { FunctionComponent } from 'react';
import { Typography } from '@material-ui/core';
import { css } from 'emotion';
import { designUnits } from '../Themes/index';
import RowLayout1Centered from '../Grids/RowLayout1Centered';
interface IProps {
  titleText: string;
  subtitleText: string;
  backgroundImage: string;
  widthOutOf12: 1 | 2 | 10 | 8 | 6 | 4 | 3 | 5 | 7 | 9 | 11 | 12;
}

/**
 * TitleSubtitleParagraphButton
 */
const PageHeader: FunctionComponent<IProps> = (props: IProps) => {
  const { subtitleText, titleText, widthOutOf12 } = props;
  const styles = getStyles(props);
  return (
    <RowLayout1Centered
      className={styles.container}
      widthOutOf12={widthOutOf12}
      middleComponent={
        <>
          <Typography align="center" className={styles.title}>
            {titleText}
          </Typography>
          <Typography align="center" className={styles.subtitle}>
            {subtitleText}
          </Typography>
        </>
      }
    />
  );
};

const getStyles = (props) => {
  return {
    title: css`
      && {
        font-size: ${designUnits(10)}px;
        margin-bottom: ${designUnits(6)}px;
        font-weight: bold;
        color: white;
        line-height: 1;
      }
    `,
    subtitle: css`
      && {
        font-size: ${designUnits(4)}px;
        color: white;
        font-size: 500;
      }
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
