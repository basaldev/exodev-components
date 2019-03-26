import React, { FunctionComponent } from 'react';
import { Card, Grid } from '@material-ui/core';

import EXTButton from '../EXTButton';
import EXTCardHeadline from '../EXTCardHeadline';
import EXTCardSubtitle from '../EXTCardSubtitle';
import EXTCardImage from '../EXTCardImage';

interface IProps {
  buttonText: string;
  headline: string;
  imageSourceUrl: string;
  imageTitle: string;
  imageWidth: number;
  subtitle: string;
}

/**
 * Exponential Transformation Book Section Card
 */
const EXTSectionCard: FunctionComponent<IProps> = (props: IProps) => {
  const {
    buttonText,
    headline,
    imageSourceUrl,
    imageTitle,
    imageWidth,
    subtitle,
  } = props;

  return (
    <div style={{ padding: 50 }}>
      <Card raised style={{ padding: 24 }}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-start"
          spacing={40}
        >
          <Grid item md={6}>
            <Grid
              container
              direction="column"
              justify="space-between"
              alignItems="flex-start"
              spacing={40}
            >
              <Grid item>
                <EXTCardHeadline size="large" text={headline} />
              </Grid>
              <Grid item>
                <EXTCardSubtitle size="large" text={subtitle} />
              </Grid>
              <Grid item alignContent="flex-end">
                <EXTButton label={buttonText} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6}>
            <EXTCardImage
              title={imageTitle}
              url={imageSourceUrl}
              width={imageWidth}
            />
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default EXTSectionCard;
