import { addDecorator, configure } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withOptions } from '@storybook/addon-options';

function loadStories() {
  const req = require.context('../src/components', true, /stories\.tsx$/);
  req.keys().forEach(req);
}

addDecorator(
  withInfo({
    inline: true
  })
);

addDecorator(
  withOptions({
    name: 'Devhub Components'
  })
);

configure(loadStories, module);
