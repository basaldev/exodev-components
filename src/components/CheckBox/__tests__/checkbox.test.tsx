import React from 'react';
import { mount } from 'enzyme';
import CheckBox from '..';

describe('<CheckBox />', () => {
  it('should call onChange', () => {
    const checked = false;
    const onChange = jest.fn();
    const wrapper = mount(<CheckBox checked={checked} onChange={onChange} />);
    wrapper
      .find('input')
      .props()
      .onChange();
    expect(onChange).toHaveBeenCalled();
  });
});
