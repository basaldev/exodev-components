import React from 'react';
import { shallow } from 'enzyme';
import Theme from '..';

describe('<Theme />', () => {
  it('should pass to theme prop', () => {
    const theme = { test: 'test' };
    const wrapper = shallow(<Theme theme={theme}>children</Theme>);
    const passedTheme = wrapper.find('Grommet').prop('theme');
    expect(passedTheme.test).toBe('test');
  });
});
