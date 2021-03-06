import React from 'react';
import {shallow} from 'enzyme';
import CalculatorTextInput from './CalculatorTextInput';

describe('<CalculatorTextInput />', () => {
  it('should be an input element', () => {
    const props = {
      name: 'testName',
      onChange: jest.fn(),
      placeholder: 'Type Here',
      value: 100
    };

    const wrapper = shallow(<CalculatorTextInput {...props} />);

    const actual = wrapper.type();
    const expected = 'input';

    expect(actual).toEqual(expected);
  });

  it('should handle change', () => {
    const props = {
      name: 'pt',
      onChange: jest.fn(),
      placeholder: 'Type Here',
      value: 100
    };

    const wrapper = shallow(<CalculatorTextInput {...props} />);

    const actual = wrapper.type();
    const expected = 'input';

    expect(actual).toEqual(expected);
    expect(props.onChange).not.toBeCalled();
    wrapper.simulate('change', {target: {value: 101}});
    expect(props.onChange).toBeCalledWith('pt', 101);
  });
});
