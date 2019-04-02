import React from 'react';
import { storiesOf } from '@storybook/react';

import Header from './';

const stories = storiesOf('Molecules/Header', module);

stories.add('default', () => (
  <Header
    logo={{
      href: '/',
      alt: 'logo',
      width: 200,
      src:
        'https://static1.squarespace.com/static/5b33ad559772aedf7cd44bf7/t/5c48589ccd836610282dfb98/1554129534941/?format=1500w',
    }}
    links={[
      { label: 'Link 1', href: '/1' },
      { label: 'Link 2', href: '/2' },
      { label: 'Link 3', href: '/3' },
    ]}
    buttons={[
      { label: 'Action 1', href: '/1' },
      { label: 'Action 2', href: '/2' },
    ]}
  />
));
