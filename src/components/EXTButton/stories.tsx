import React from 'react';
import { storiesOf } from '@storybook/react';

import EXTButton from './';

const stories = storiesOf('Atoms/EXTButton', module);

stories.add('default', () => <EXTButton label="Button label here" />);
