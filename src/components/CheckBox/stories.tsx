import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
import CheckBox from './index';

const stories = storiesOf('Atoms/CheckBox', module);

stories.add('default', () => {
  const checked = boolean('checked', false);
  const onChange = action('change');
  return <CheckBox checked={checked} onChange={onChange} />;
});

stories.add('with label', () => {
  const checked = boolean('checked', false);
  const onChange = action('change');
  const label = text('label', 'checkbox');
  return <CheckBox label={label} checked={checked} onChange={onChange} />;
});
