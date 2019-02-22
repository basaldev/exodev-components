import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import TextInput from './index';

const stories = storiesOf('Atoms/TextInput', module);

const bgDecorator = withBackgrounds([
  { name: 'default', value: '#999', default: true },
  { name: 'pink', value: '#EE7977' },
]);

stories.add('default', () => {
  const value = text('value', 'Welocome to DevHub components');
  const onChange = action('change');
  return <TextInput value={value} onChange={onChange} />;
});

stories.addDecorator(bgDecorator).add('inverse', () => {
  const value = text('value', 'Welocome to DevHub components');
  const onChange = action('change');
  return <TextInput inverse value={value} onChange={onChange} />;
});
