import React from 'react';
import { storiesOf } from '@storybook/react';
import VerticalIconTitleParagraph from './';

const stories = storiesOf('Molecules/VerticalIconTitleParagraph', module);

stories.add('default', () => (
  <VerticalIconTitleParagraph
    iconSourceUrl="https://exolaunchpad.com/imgs/feature_3.png"
    titleText="Why you need ExO Launchpad?"
    paragraphTexts={[
      'ExO Launchpad includes a number of our open tools and resources: ExO canvas, tools and methods allow anyone to tap into abundance and to manage it to scale exponentially as we deliver you educational resources, field experts and tools to help you build great exponential organizations.',
    ]}
  />
));
