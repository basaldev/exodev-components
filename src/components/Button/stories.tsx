import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './index';

const stories = storiesOf('Atoms/Button', module);

const bgDecorator = (storyFn) => (
  <div style={{ background: '#eee', padding: '20px' }}>{storyFn()}</div>
);

stories.add('default', () => <Button label="Join the Community" />);

stories
  .addDecorator(bgDecorator)
  .add('inverse', () => <Button color="white" label="Join the Community" />);
