import React from 'react';
import { storiesOf } from '@storybook/react';
import FormArea from './';

const stories = storiesOf('Molecules/FormArea', module);

stories.add('form with email, name, location, joinMailingList', () => (
  <FormArea
    iconSourceUrl="https://exolaunchpad.com/imgs/rocket.png"
    titleText="Do you want to join the collaborator community to build the ExO Launchpad?"
    formElements={[
      {
        desiredVariable: 'email',
        id: 'email',
        label: 'Email Address',
        type: 'email',
        required: true,
      },
      {
        desiredVariable: 'name',
        id: 'name',
        label: 'Name',
        type: 'text',
        required: false,
      },
      {
        desiredVariable: 'location',
        id: 'location',
        label: 'Preferred Location of Summit/Workshop',
        type: 'text',
        required: false,
      },
      {
        desiredVariable: 'joinMailingList',
        id: 'joinMailingList',
        label: 'Join the general ExO Movement email list',
        required: false,
      },
    ]}
    formButtonLabel="Subscribe"
  />
));

stories.add('form with email, name, linkedInUrl', () => (
  <FormArea
    iconSourceUrl="https://exolaunchpad.com/imgs/rocket.png"
    titleText="Do you want to join the collaborator community to build the ExO Launchpad?"
    formElements={[
      {
        desiredVariable: 'email',
        id: 'email',
        label: 'Email Address',
        type: 'email',
        required: true,
      },
      {
        desiredVariable: 'name',
        id: 'name',
        label: 'Name',
        type: 'text',
        required: false,
      },
      {
        desiredVariable: 'linkedInUrl',
        id: 'linkedInUrl',
        label: 'LinkedIn URL',
        type: 'text',
        required: false,
      },
    ]}
    formButtonLabel="Subscribe"
  />
));
