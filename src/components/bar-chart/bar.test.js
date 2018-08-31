import React from 'react';
import { shallow } from 'enzyme';
import Bar from './bar';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('Bar', () => {
  it('Renders with given width', () => {
    // Given, When
    const wrapper = shallow(<Bar icon="female" percentDisplay="48%" maxGrams="25" numTsp="3"/>);

    // Then expect bar width to match percentage...
    const barInner = wrapper.find('[data-test="bar-inner"]');
    expect(barInner.props().style.width).toEqual('48%');
    // ... and bar label to display percentage
    const barLabel = wrapper.find('[data-test="bar-label"]');
    expect(barLabel.props().children).toEqual('48%');
    // ... and icon to be displayed
    const femaleIcon = wrapper.find('[data-test="female-icon"]');
    expect(femaleIcon.exists()).toBe(true);
    const maleIcon = wrapper.find('[data-test="male-icon"]');
    expect(maleIcon.exists()).toBe(false);
  });
});
