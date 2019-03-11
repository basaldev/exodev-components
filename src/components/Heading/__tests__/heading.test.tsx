import React from 'react';
import { mount } from 'enzyme';
import Heading from '..';

describe('<Heading />', () => {
  it('should render', () => {
    const wrapper = mount(<Heading>test</Heading>);
    expect(wrapper.text()).toBe('test');
  });
});
