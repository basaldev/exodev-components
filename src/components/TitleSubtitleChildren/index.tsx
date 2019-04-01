import React, { FunctionComponent, ReactNode, ReactChildren } from 'react';
import { Grid, Typography } from '@material-ui/core';

interface IProps {
  children?: ReactChildren;
  titleText?: string;
  subtitleText?: string;
  paragraphTexts?: string[];
  buttonComponent?: ReactNode;
  titleConfig?: {
    variant: "h1" | "h2" | "h3"
  };
  subtitleConfig?: {
    variant: "h2" | "h3" | "h4"
  };
}

const defaultTitleConfig : IProps["titleConfig"] = {
  variant: "h1"
};
const defaultSubtitleConfig : IProps["subtitleConfig"] = {
  variant: "h2"
};

/**
 * TitleSubtitleParagraphButton
 */
const TitleSubtitleChildren: FunctionComponent<IProps> = (
  props: IProps,
) => {
  const { titleText, subtitleText, children, titleConfig, subtitleConfig } = props;
  const titleProps = typeof titleConfig !== 'undefined' ? {...defaultTitleConfig, ...titleConfig} : defaultTitleConfig;
  const subtitleProps = typeof subtitleConfig !== 'undefined' ? {...defaultSubtitleConfig, ...subtitleConfig} : defaultSubtitleConfig;
  return (
    <>
      <Grid container direction="column">
        <Grid item>
          {/* Title */}
          <Typography  variant={titleProps.variant}>{titleText}</Typography>
        </Grid>
        <Grid item>
          {/* Subtitle */}
          <Typography variant={subtitleProps.variant} >{subtitleText}</Typography>
        </Grid>
        <Grid item>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default TitleSubtitleChildren;
