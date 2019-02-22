import React from 'react';
import { mount } from 'enzyme';
import TextInput from '..';

describe('<TextInput />', () => {
  it('should call onChange', () => {
    const value = 'input';
    const onChange = jest.fn();
    const wrapper = mount(<TextInput value={value} onChange={onChange} />);
    wrapper
      .find('input')
      .props()
      .onChange();
    expect(onChange).toHaveBeenCalled();
  });
});
