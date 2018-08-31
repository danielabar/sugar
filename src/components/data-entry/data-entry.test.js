import React from 'react';
// import { shallow, mount, render } from 'enzyme';
import { shallow } from 'enzyme';
import DataEntry from './data-entry';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('DataEntry', () => {
  it('Initially renders with input valid and action button disabled', () => {
    // Given, When
    const wrapper = shallow(<DataEntry />);
    const inputGrams = wrapper.find('[data-test="input-grams"]')
    const primaryActionButton = wrapper.find('[data-test="primary-action"]');

    // Then
    expect(inputGrams.props().className).not.toMatch(/error/);
    expect(primaryActionButton.props().disabled).toBe(true);
  });

  it('Enables button when valid input is entered', () => {
    // Given
    const wrapper = shallow(<DataEntry />);

    // When
    wrapper.setState({grams: '5'});

    // Then
    const inputGrams = wrapper.find('[data-test="input-grams"]')
    const primaryActionButton = wrapper.find('[data-test="primary-action"]');
    expect(inputGrams.props().className).not.toMatch(/error/);
    expect(primaryActionButton.props().disabled).toBe(false);
  });

  it('Disables button and marks input error when invalid input is entered', () => {
    // Given
    const wrapper = shallow(<DataEntry />);

    // When
    wrapper.setState({grams: 'a'});
    wrapper.find('[data-test="input-grams"]').simulate('blur');
    wrapper.update();

    // Then
    const inputGrams = wrapper.find('[data-test="input-grams"]');
    const primaryActionButton = wrapper.find('[data-test="primary-action"]');
    expect(inputGrams.props().className).toMatch(/error/);
    expect(primaryActionButton.props().disabled).toBe(true);
  });
});
