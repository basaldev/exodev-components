import { addDecorator, configure } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs';
import { themeDecorator } from '../src/components/Theme';

if (process.env.NODE_ENV === 'test') {
  // tslint:disable-next-line
  require('./__tests__/polyfillRequireContext').default(require, __dirname);
}

function loadStories() {
  const req = require.context('../src/components', true, /stories\.tsx$/);
  req.keys().forEach(req);
}

addDecorator(
  withInfo({
    inline: true,
  }),
);

addDecorator(
  withOptions({
    name: 'Devhub Components',
  }),
);

addDecorator(withKnobs);

addDecorator(themeDecorator);

configure(loadStories, module);
