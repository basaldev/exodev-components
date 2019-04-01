import React from 'react';
import { storiesOf } from '@storybook/react';
import FooterContent from './';

const stories = storiesOf('Molecules/FooterContent', module);

stories.add('default', () => (
  <FooterContent
    logoSourceUrl="https://exolaunchpad.com/imgs/social/openexo_logo_white.png"
    links={[
      {
        label: 'Exponential Organizations',
        url: 'https://exponentialorgs.com/',
      },
      {
        label: 'Exponential Transformation',
        url: 'https://exponentialtransformationbook.com/',
      },
      {
        label: 'ExO Canvas',
        url: 'https://www.exocanvas.com/',
      },
    ]}
    companyInfo={[
      'Building Exponential Organizations - OpenExO® 2019',
      'Copyright © 2019 All rights reserved',
      'Made with ❤ by ExO DevHub',
    ]}
  />
));
