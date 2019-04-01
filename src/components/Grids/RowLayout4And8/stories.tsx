import React from 'react';
import { storiesOf } from '@storybook/react';
import RowLayout4And8 from './';

const stories = storiesOf('Molecules/RowLayout4And8', module);

stories.add('default', () => (
  <RowLayout4And8
    leftComponent={
      <div style={{ backgroundColor: 'red', height: 400 }}>left</div>
    }
    rightComponent={
      <div style={{ backgroundColor: 'yellow', height: 400 }}>right</div>
    }
  />
));
