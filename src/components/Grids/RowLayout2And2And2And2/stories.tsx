import React from 'react';
import { storiesOf } from '@storybook/react';
import RowLayout2And2And2And2 from './';

const stories = storiesOf('Molecules/RowLayout2And2And2And2', module);

stories.add('default', () => (
  <RowLayout2And2And2And2
    farLeftComponent={
      <div style={{ backgroundColor: 'red', height: 400 }}>far left</div>
    }
    leftOfCenterComponent={
      <div style={{ backgroundColor: 'yellow', height: 400 }}>
        left of center
      </div>
    }
    rightOfCenterComponent={
      <div style={{ backgroundColor: 'green', height: 400 }}>
        right of center
      </div>
    }
    farRightComponent={
      <div style={{ backgroundColor: 'blue', height: 400 }}>far right</div>
    }
  />
));
