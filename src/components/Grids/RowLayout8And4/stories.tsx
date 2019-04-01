import React from 'react';
import { storiesOf } from '@storybook/react';
import RowLayout8And4 from './';

const stories = storiesOf('Molecules/RowLayout8And4', module);

stories.add('default', () => (
  <RowLayout8And4
    leftComponent={
      <div style={{ backgroundColor: 'red', height: 400 }}>left</div>
    }
    rightComponent={
      <div style={{ backgroundColor: 'yellow', height: 400 }}>right</div>
    }
  />
));
