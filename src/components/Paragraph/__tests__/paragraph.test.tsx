import React from 'react';
import { mount } from 'enzyme';
import Paragraph from '..';

describe('<Paragraph />', () => {
  it('should render', () => {
    const wrapper = mount(<Paragraph>test</Paragraph>);
    expect(wrapper.text()).toBe('test');
  });
});
