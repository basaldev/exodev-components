import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './index';

const stories = storiesOf('Atoms/Button', module);

stories.add(
  'default',
  () => <Button label="default" />
);
