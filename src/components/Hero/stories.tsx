import React from 'react';
import { storiesOf } from '@storybook/react';
import Hero from './index';
import Button from '../Button/index';
const stories = storiesOf('Molecule/Hero', module);

stories.add(
  'default',
  () => <Hero
            heading="Welcome to the site"
            text={`
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus corporis, nam cumque amet dignissimos nulla assumenda esse perspiciatis
            ipsam velit aut voluptatem enim mollitia obcaecati ipsum. Eius quidem tenetur non?
            `}
            >
            <Button label="test" fill={false} alignSelf="start" />
            </Hero>
);

stories.add(
  'Background Color',
  () => <Hero
            background="dark-1"
            heading="Welcome to the site"
            text={`
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus corporis, nam cumque amet dignissimos nulla assumenda esse perspiciatis
            ipsam velit aut voluptatem enim mollitia obcaecati ipsum. Eius quidem tenetur non?
            `}
            >
            </Hero>
);
stories.add(
  'Background Image',
  () => <Hero
            background={{
              color: 'dark-1',
              image: "url(https://images.unsplash.com/photo-1549876612-f9ea53d45266?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)"
            }}
            heading="I have an image background"
            text={`
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus corporis, nam cumque amet dignissimos nulla assumenda esse perspiciatis
            ipsam velit aut voluptatem enim mollitia obcaecati ipsum. Eius quidem tenetur non?
            `}
            >
            <Button label="Join the community" fill={false} alignSelf="start" />
            </Hero>
);
