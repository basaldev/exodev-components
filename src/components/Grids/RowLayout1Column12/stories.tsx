import React from 'react';
import { storiesOf } from '@storybook/react';
import RowLayout1Column12 from './';

const stories = storiesOf('ContentPatterns', module);

stories.add('', () => (
  <RowLayout1Column12
    widthOutOf12={8}
    middleComponent={<div style={{ background: 'yellow', height: 300 }} />}
  />
));
