import React from 'react';
import { storiesOf } from '@storybook/react';
import EXTSectionCard from './';

const stories = storiesOf('Molecules/EXTSectionCard', module);

stories.add('default', () => (
  <EXTSectionCard
    headline="Navigate Industry Disruption"
    subtitle="Overcome your organizational immune system and become a thriving exponential organization"
    buttonText="Order your copy today!"
    imageSourceUrl="https://exponentialtransformationbook.com/wp-content/uploads/exponential-transformations-book-cover@x2.png"
    imageTitle="Exponential Transformations book"
    imageWidth={390}
  />
));
