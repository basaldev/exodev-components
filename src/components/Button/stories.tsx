import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import Button from './index';

const stories = storiesOf('Atoms/Button', module);

const bgDecorator = (storyFn) => (
  <div style={{ background: '#eee', padding: '20px' }}>{storyFn()}</div>
);

stories.add('default', () => {
  const label = text('label', 'button');
  const onClick = action('click');
  return <Button label={label} onClick={onClick} />;
});

stories.addDecorator(bgDecorator).add('inverse', () => {
  const label = text('label', 'button');
  const color = text('color', 'white');
  const onClick = action('click');
  return <Button color={color} label={label} onClick={onClick} />;
});
