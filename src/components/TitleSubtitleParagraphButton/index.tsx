import React, { FunctionComponent, ReactNode } from 'react';
import { Grid, Typography } from '@material-ui/core';

type alignTypo = 'inherit' | 'justify' | 'center' | 'left' | 'right';
interface IProps {
  titleText?: string;
  subtitleText?: string;
  paragraphTexts?: string[];
  buttonComponent?: ReactNode;
  spacing?: 0 | 8 | 16 | 24 | 32 | 40;
  textAlign?: 'center' | 'right' | 'left';
  buttonAlign?: 'center' | 'stretch' | 'flex-start' | 'flex-end' | 'baseline';
  titleConfig?: {
    variant: any;
    align?: any;
  };
  subtitleConfig?: {
    variant: any;
    align?: alignTypo;
  };
}

/**
 * TitleSubtitleParagraphButton
 */

const defaultProps = {
  spacing: 8,
  textAlign: 'left',
  buttonAlign: 'center',
  titleConfig: {
    variant: 'h1',
    align: 'left',
  },
  subtitleConfig: {
    variant: 'h2',
    align: 'left',
  },
};

const TitleComp = (titleProps, titleText) => {
  return (
    <Typography align={titleProps.align} variant={titleProps.variant}>
      {titleText}
    </Typography>
  );
};

const SubtitleComp = (subtitleProps, subtitleText) => {
  return (
    <Typography align={subtitleProps.align} variant={subtitleProps.variant}>
      {subtitleText}
    </Typography>
  );
};

const TitleSubtitleParagraphButton: FunctionComponent<IProps> = ({
  titleText,
  textAlign,
  subtitleText,
  spacing,
  buttonAlign,
  paragraphTexts,
  buttonComponent,
  titleConfig,
  subtitleConfig,
}: IProps) => {
  const titleProps: any = titleConfig || defaultProps.titleConfig;
  const subtitleProps: any = subtitleConfig || defaultProps.subtitleConfig;

  return (
    <>
      <Grid container direction="column" spacing={spacing}>
        <Grid item>
          {/* Title */}
          {TitleComp(titleProps, titleText)}
        </Grid>
        <Grid item>
          {/* Subtitle */}
          {SubtitleComp(subtitleProps, subtitleText)}
        </Grid>
        <Grid item>
          {/* Paragraphs */}
          {paragraphTexts &&
            paragraphTexts.map((text) => (
              <Typography align={textAlign} variant={'body1'}>
                {text}
              </Typography>
            ))}
        </Grid>
        <Grid item alignItems={buttonAlign}>
          {/* Button Component */}
          {buttonComponent}
        </Grid>
      </Grid>
    </>
  );
};

export default TitleSubtitleParagraphButton;
