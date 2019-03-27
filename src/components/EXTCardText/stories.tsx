import React from 'react';
import { storiesOf } from '@storybook/react';
import EXTCardText from './';

const stories = storiesOf('Atoms/EXTCardText', module);

stories.add('default', () => (
  <EXTCardText text="As exponential technologies converge and build upon one another, they bring abundance to every industry and, simultaneously, disrupt them all in one way or another." />
));
