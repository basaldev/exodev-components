import React from 'react';
import { storiesOf } from '@storybook/react';
import RowLayout1Centered from './';

const stories = storiesOf('ContentPatterns/RowLayout1Centered', module);

stories.add('default', () => (
  <RowLayout1Centered
    widthOutOf12={8}
    middleComponent={<div style={{ background: 'yellow', height: 300 }} />}
  />
));
