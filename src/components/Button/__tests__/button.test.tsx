import React from 'react';
import * as Enzyme from 'enzyme';
import Button from '..';

describe('<Button />', () => {
  it('should call onClick', () => {
    const onClick = jest.fn();
    const wrapper = Enzyme.shallow(<Button label="label" onClick={onClick} />);
    wrapper.simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
});
