import React from 'react';
import { storiesOf } from '@storybook/react';
import RowLayout1Centered from './';

const stories = storiesOf('ContentPatterns', module);

stories.add('', () => (
  <RowLayout1Centered
    widthOutOf12={8}
    middleComponent={<div style={{ background: 'yellow', height: 300 }} />}
  />
));
