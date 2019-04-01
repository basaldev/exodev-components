import React, { FunctionComponent, ReactNode } from 'react';
import { Grid, Typography } from '@material-ui/core';

interface IProps {
  titleText?: string;
  subtitleText?: string;
  paragraphTexts?: string[];
  buttonComponent?: ReactNode;
}

/**
 * TitleSubtitleParagraphButton
 */
const TitleSubtitleParagraphButton: FunctionComponent<IProps> = (
  props: IProps,
) => {
  const { titleText, subtitleText, paragraphTexts, buttonComponent } = props;

  return (
    <>
      <Grid container direction="column">
        <Grid item>
          {/* Title */}
          <Typography variant={'h1'}>{titleText}</Typography>
        </Grid>
        <Grid item>
          {/* Subtitle */}
          <Typography variant={'h2'}>{subtitleText}</Typography>
        </Grid>
        <Grid item>
          {/* Paragraphs */}
          {paragraphTexts &&
            paragraphTexts.map((text) => (
              <Typography variant={'body1'}>{text}</Typography>
            ))}
        </Grid>
        <Grid item>
          {/* Button Component */}
          {buttonComponent}
        </Grid>
      </Grid>
    </>
  );
};

export default TitleSubtitleParagraphButton;
