import React from 'react';
import { storiesOf } from '@storybook/react';
import Hero from './index';
import Button from '../Button/index';
const stories = storiesOf('Molecules/Hero', module);

// MEMO: I want to have Box components and use it in Hero

stories.add('default', () => (
  <Hero
    heading="Welcome to the site"
    description={[
      `
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ducimus corporis, nam cumque amet dignissimos nulla assumenda esse perspiciatis
        ipsam velit aut voluptatem enim mollitia obcaecati ipsum. Eius quidem tenetur non?
      `,
      <Button label="Join the community" />,
    ]}
  >
    <img width="300" src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg" />
  </Hero>
));

stories.add('With background Color', () => (
  <Hero
    background="dark-1"
    heading="Welcome to the site"
    description={[
      `
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ducimus corporis, nam cumque amet dignissimos nulla assumenda esse perspiciatis
        ipsam velit aut voluptatem enim mollitia obcaecati ipsum. Eius quidem tenetur non?
      `,
    ]}
  />
));
stories.add('With background Image', () => (
  <Hero
    background={{
      color: 'dark-1',
      image:
        'url(https://images.unsplash.com/photo-1549876612-f9ea53d45266?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)',
    }}
    heading="I have an image background"
    description={[
      `
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ducimus corporis, nam cumque amet dignissimos nulla assumenda esse perspiciatis
        ipsam velit aut voluptatem enim mollitia obcaecati ipsum. Eius quidem tenetur non?
      `,
      <Button label="Join the community" fill={false} alignSelf="start" />,
    ]}
  />
));
