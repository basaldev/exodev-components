import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Paragraph from './index';

const stories = storiesOf('Atoms/Paragraph', module);

stories.add('default', () => {
  const children = text(
    'children',
    'Dependent certainty off discovery him his tolerably offending. Ham for attention remainder sometimes additions recommend fat our. Direction has strangers now believing. Respect enjoyed gay far exposed parlors towards. Enjoyment use tolerably dependent listening men. No peculiar in handsome together unlocked do by. Article concern joy anxious did picture sir her. Although desirous not recurred disposed off shy you numerous securing.',
  );
  return (
    <>
      <Paragraph size="xxsmall">{children}</Paragraph>
      <Paragraph size="xsmall">{children}</Paragraph>
      <Paragraph size="small">{children}</Paragraph>
      <Paragraph>{children}</Paragraph>
      <Paragraph size="large">{children}</Paragraph>
      <Paragraph size="xlarge">{children}</Paragraph>
      <Paragraph size="xxlarge">{children}</Paragraph>
    </>
  );
});
