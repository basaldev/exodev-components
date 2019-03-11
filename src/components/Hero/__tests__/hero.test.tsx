import React from 'react';
import { mount } from 'enzyme';
import Hero from '..';

describe('<Hero />', () => {
  it('should render', () => {
    const wrapper = mount(<Hero heading="heading" description="description" />);
    expect(wrapper.find('Heading').get(0).props.children).toBe('heading');
    expect(wrapper.find('Paragraph').get(0).props.children).toBe('description');
  });
});
