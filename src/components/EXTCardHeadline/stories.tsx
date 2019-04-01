import React from 'react';
import { storiesOf } from '@storybook/react';

import EXTCardHeadline from './';

const stories = storiesOf('Atoms/EXTCardHeadline', module);

stories.add('default', () => (
  <EXTCardHeadline size="large" text="Some text here" />
));
