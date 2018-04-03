/* global it, expect */

import React from 'react';
import { shallow } from 'enzyme';

import Footer from './Footer';

it('renders without crashing', () => {
  const component = shallow(<Footer />);
  expect(component.exists()).toEqual(true);
});
