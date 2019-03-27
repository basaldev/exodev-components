import React from 'react';
import { storiesOf } from '@storybook/react';
import HeroContent from './';

const stories = storiesOf('Molecules/HeroContent', module);

stories.add('default', () => (
  <HeroContent
    logoSourceUrl="https://exolaunchpad.com/imgs/social/logo.svg"
    paragraphTexts={[
      'Launchpad helps you build a new type of organization, an ExO or Exponential Organization. An ExO is a purpose-driven venture that leverages exponential technologies and a set of common attributes to grow and transform the world.',
    ]}
    buttonLabel="Join the Community"
  />
));
