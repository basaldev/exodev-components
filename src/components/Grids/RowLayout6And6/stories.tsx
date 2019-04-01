import React from 'react';
import { storiesOf } from '@storybook/react';
import RowLayout6And6 from './';

const stories = storiesOf('ContentPatterns/RowLayout6And6', module);

stories.add('Row Layout with two sm=6 width columns', () => (
  <RowLayout6And6
    leftComponent={<div style={{ background: 'red', height: 300 }} />}
    rightComponent={<div style={{ background: 'yellow', height: 300 }} />}
  />
));
