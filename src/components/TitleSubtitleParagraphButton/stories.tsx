import React from 'react';
import { storiesOf } from '@storybook/react';
import TitleSubtitleParagraphButton from './';

const stories = storiesOf('Molecules/TitleSubtitleParagraphButton', module);

stories.add('default', () => (
  <TitleSubtitleParagraphButton
    titleConfig={{
      text: 'Why you need ExO Launchpad?',
    }}
    subtitleConfig={{
      text: 'Subtitle text here',
    }}
    paragraphTexts={[
      'ExO Launchpad includes a number of our open tools and resources:',
      'ExO canvas, tools and methods allow anyone to tap into abundance and to manage it to scale exponentially.',
      'We deliver you educational resources, field experts and tools to help you build great exponential organizations.',
    ]}
  />
));
