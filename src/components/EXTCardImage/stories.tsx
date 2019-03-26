import React from 'react';
import { storiesOf } from '@storybook/react';

import EXTCardImage from './';

const stories = storiesOf('Atoms/EXTCardImage', module);

stories.add('default', () => (
  <EXTCardImage
    title="Image title"
    url="https://images.unsplash.com/photo-1453785675141-67637e2d4b5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1636&q=80"
    width={200}
  />
));
