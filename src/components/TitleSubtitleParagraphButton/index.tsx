import React, { FunctionComponent, ReactNode } from 'react';
import { Grid, Typography } from '@material-ui/core';

interface IProps {
  titleText?: string;
  subtitleText?: string;
  paragraphTexts?: string[];
  buttonComponent?: ReactNode;
  spacing?: 0 | 8 | 16 | 24 | 32 | 40;
  textAlign?: 'center' | 'right' | 'left';
  buttonAlign?: 'center' | 'stretch' | 'flex-start' | 'flex-end' | 'baseline';
  titleConfig?: {
    variant: 'h1' | 'h2' | 'h3';
    align: 'inherit' | 'justify' | 'center' | 'left' | 'right';
  };
  subtitleConfig?: {
    variant: 'h2' | 'h3' | 'h4';
    align: 'inherit' | 'justify' | 'center' | 'left' | 'right';
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

const TitleSubtitleParagraphButton: FunctionComponent<IProps> = ({
  titleText,
  textAlign,
  subtitleText,
  spacing,
  buttonAlign = defaultProps.buttonAlign,
  paragraphTexts,
  buttonComponent,
  titleConfig = defaultProps.titleConfig,
  subtitleConfig = defaultProps.subtitleConfig,
}: IProps) => {
  return (
    <>
      <Grid container direction="column" spacing={spacing}>
        <Grid item>
          {/* Title */}
          <Typography align={titleConfig.align} variant={titleConfig.variant}>
            {titleText}
          </Typography>
        </Grid>
        <Grid item>
          {/* Subtitle */}
          <Typography
            align={subtitleConfig.align}
            variant={subtitleConfig.variant}
          >
            {subtitleText}
          </Typography>
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
