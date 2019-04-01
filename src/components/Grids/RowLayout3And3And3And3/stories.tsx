import React from 'react';
import { storiesOf } from '@storybook/react';
import RowLayout3And3And3And3 from './';

const stories = storiesOf('ContentPatterns/RowLayout3And3And3And3', module);

stories.add('default', () => (
  <RowLayout3And3And3And3
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
