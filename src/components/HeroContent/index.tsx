import React, { FunctionComponent } from 'react';
import { Button, CardMedia, Grid, Typography } from '@material-ui/core';

interface IProps {
  logoSourceUrl: string;
  paragraphTexts: string[];
  buttonLabel: string;
}

/**
 * HeroContent
 *
 * Molecule: Logo, over hero text, over call-to-action button
 */
const HeroContent: FunctionComponent<IProps> = (props: IProps) => {
  const { logoSourceUrl, paragraphTexts, buttonLabel } = props;

  return (
    <>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
        spacing={40}
        style={{ maxWidth: 800, backgroundColor: 'blue' }}
      >
        {/* Logo */}
        <Grid item>
          <CardMedia component="img" image={logoSourceUrl} />
        </Grid>
        {/* Paragraphs */}
        <Grid item>
          {paragraphTexts.map((text) => {
            return (
              <Typography
                variant={'body1'}
                align="left"
                style={{ color: 'white' }}
              >
                {text}
              </Typography>
            );
          })}
        </Grid>
        {/* Call-to-Action Button */}
        <Grid item>
          {' '}
          <Button
            onClick={() => alert('HeroContent Button onClick fired!')}
            variant="outlined"
            style={{
              color: 'yellow',
              borderRadius: 24,
              borderColor: 'yellow',
            }}
          >
            {buttonLabel}
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default HeroContent;
