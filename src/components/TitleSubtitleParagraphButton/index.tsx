import React, { FunctionComponent, ReactNode } from 'react';
import { Grid, Typography } from '@material-ui/core';

type TitleConfig =
  | {
      text?: string;
      variant?: 'h1' | 'h2' | 'h3';
      align?: 'inherit' | 'justify' | 'center' | 'left' | 'right';
    }
  | undefined;

type SubtitleConfig =
  | {
      text?: string;
      variant?: 'h2' | 'h3' | 'h4';
      align?: 'inherit' | 'justify' | 'center' | 'left' | 'right';
    }
  | undefined;

interface IProps {
  titleConfig?: TitleConfig;
  subtitleConfig?: SubtitleConfig;
  paragraphTexts?: string[];
  buttonComponent?: ReactNode;
  spacing?: 0 | 8 | 16 | 24 | 32 | 40;
  textAlign?: 'center' | 'right' | 'left';
  buttonAlign?: 'center' | 'stretch' | 'flex-start' | 'flex-end' | 'baseline';
}

/**
 * TitleSubtitleParagraphButton
 */

const defaultProps: IProps = {
  titleConfig: {
    text: '',
    variant: 'h1',
    align: 'left',
  },
  subtitleConfig: {
    text: '',
    variant: 'h2',
    align: 'left',
  },
  spacing: 8,
  textAlign: 'left',
  buttonAlign: 'center',
};

const TitleComponent = (titleConfig: TitleConfig) => {
  if (!titleConfig) {
    return null;
  }
  return (
    <Typography align={titleConfig.align} variant={titleConfig.variant}>
      {titleConfig.text}
    </Typography>
  );
};

const SubtitleComponent = (subtitleConfig: SubtitleConfig) => {
  if (!subtitleConfig) {
    return null;
  }
  return (
    <Typography align={subtitleConfig.align} variant={subtitleConfig.variant}>
      {subtitleConfig.text}
    </Typography>
  );
};

const TitleSubtitleParagraphButton: FunctionComponent<IProps> = ({
  titleConfig,
  subtitleConfig,
  textAlign,
  spacing,
  buttonAlign,
  paragraphTexts,
  buttonComponent,
}: IProps) => {
  return (
    <>
      <Grid container direction="column" spacing={spacing}>
        <Grid item>
          {/* Title */}
          {TitleComponent(titleConfig || defaultProps.titleConfig)}
        </Grid>
        <Grid item>
          {/* Subtitle */}
          {SubtitleComponent(subtitleConfig || defaultProps.subtitleConfig)}
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
