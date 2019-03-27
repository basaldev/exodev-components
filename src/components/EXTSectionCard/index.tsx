import React, { FunctionComponent } from 'react';
import { Card, Grid } from '@material-ui/core';

import EXTCardButton from '../EXTCardButton';
import EXTCardHeadline from '../EXTCardHeadline';
import EXTCardSubtitle from '../EXTCardSubtitle';
import EXTCardImage from '../EXTCardImage';
import EXTCardText from '../EXTCardText';

interface IProps {
  buttonText?: string;
  cardText?: string[];
  headline: string;
  imageSide: 'right' | 'left';
  imageSourceUrl: string;
  imageTitle: string;
  imageWidth: number;
  subtitle: string;
  variation: 'button' | 'text';
}

/**
 * Exponential Transformation Book Section Card
 *
 * Choose from:
 * - imageSide: 'left' or 'right'
 * - variation: 'button' or 'text'
 *
 * If variation is 'button', supply buttonText as a string.
 * If variation is 'text', suppy cardText of an array of strings, one for each paragraph.
 */
const EXTSectionCard: FunctionComponent<IProps> = (props: IProps) => {
  const {
    buttonText,
    cardText,
    headline,
    imageSide,
    imageSourceUrl,
    imageTitle,
    imageWidth,
    subtitle,
    variation,
  } = props;

  return (
    <div style={{ padding: 50 }}>
      <Card raised style={{ padding: 24 }}>
        <Grid
          container
          direction={imageSide === 'right' ? 'row' : 'row-reverse'}
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
                {variation === 'button' ? (
                  <EXTCardButton label={buttonText} />
                ) : (
                  <Grid container direction="column" spacing={24}>
                    {cardText &&
                      cardText.map((txt) => {
                        return (
                          <Grid item>
                            <EXTCardText text={txt} />
                          </Grid>
                        );
                      })}
                  </Grid>
                )}
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
