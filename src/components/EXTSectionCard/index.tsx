import React, { FunctionComponent } from 'react';
import { Card } from '@material-ui/core';

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
    <Card>
      <EXTCardHeadline size="large" text={headline} />
      <EXTCardSubtitle size="large" text={subtitle} />
      <EXTButton label={buttonText} />
      <EXTCardImage
        title={imageTitle}
        url={imageSourceUrl}
        width={imageWidth}
      />
    </Card>
  );
};

export default EXTSectionCard;
