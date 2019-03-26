import React from 'react';
import { storiesOf } from '@storybook/react';
import EXTCardSubtitle from './';

const stories = storiesOf('Atoms/EXTCardSubtitle', module);

stories.add('default', () => (
  <EXTCardSubtitle size="medium" text="Some text here" />
));
