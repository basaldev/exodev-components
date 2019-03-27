import React from 'react';
import { storiesOf } from '@storybook/react';

import EXTCardButton from './';

const stories = storiesOf('Atoms/EXTCardButton', module);

stories.add('default', () => <EXTCardButton label="Button label here" />);
