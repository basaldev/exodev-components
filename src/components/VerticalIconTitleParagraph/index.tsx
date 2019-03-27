import React, { FunctionComponent } from 'react';
import { Card, CardMedia, Grid, Typography } from '@material-ui/core';

interface IProps {
  iconSourceUrl: string;
  titleText: string;
  paragraphTexts: string[];
}

/**
 * VerticalIconTitleParagraph
 * Molecule: Vertical layout of icon above title above paragraph of text
 */
const VerticalIconTitleParagraph: FunctionComponent<IProps> = (
  props: IProps,
) => {
  const { iconSourceUrl, titleText, paragraphTexts } = props;

  return (
    <Card>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={40}
        style={{ maxWidth: 600 }}
      >
        {/* Icon */}
        <Grid item>
          <CardMedia component="img" image={iconSourceUrl} />
        </Grid>
        {/* Title */}
        <Grid item>
          <Typography variant={'h3'} align="center">
            {titleText}
          </Typography>
        </Grid>
        {/* Paragraph */}
        <Grid item>
          {paragraphTexts.map((text) => {
            return (
              <Typography variant={'body1'} align="center">
                {text}
              </Typography>
            );
          })}
        </Grid>
      </Grid>
    </Card>
  );
};

export default VerticalIconTitleParagraph;
