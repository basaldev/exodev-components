import React, { FunctionComponent } from 'react';
import { CardMedia } from '@material-ui/core';

interface IProps {
  title: string;
  url: string;
  width: number;
}

/**
 * Exponential Transformation Book Card Image
 */
const EXTCardImage: FunctionComponent<IProps> = (props: IProps) => {
  const { title, url, width } = props;
  return (
    <CardMedia
      component="img"
      image={url}
      style={{ width }}
      title={title}
    />
  );
};

export default EXTCardImage;
