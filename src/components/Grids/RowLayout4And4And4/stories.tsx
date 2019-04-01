import React from 'react';
import { storiesOf } from '@storybook/react';
import RowLayout4And4And4 from './';

const stories = storiesOf('ContentPatterns/RowLayout4And4And4', module);

stories.add('Row Layout with three sm=4 width columns', () => (
  <RowLayout4And4And4
    leftComponent={<div style={{ background: 'red', height: 300 }} />}
    middleComponent={<div style={{ background: 'green', height: 300 }} />}
    rightComponent={<div style={{ background: 'yellow', height: 300 }} />}
  />
));
