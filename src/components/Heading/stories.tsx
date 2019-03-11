import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Heading from './index';

const stories = storiesOf('Atoms/Heading', module);

stories.add('default', () => {
  const children = text('children', 'Welcome to my website');
  return (
    <>
      <Heading>{children}</Heading>
      <Heading level="2">{children}</Heading>
      <Heading level="3">{children}</Heading>
      <Heading level="4">{children}</Heading>
      <Heading level="5">{children}</Heading>
      <Heading level="6">{children}</Heading>
    </>
  );
});
