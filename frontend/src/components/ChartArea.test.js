/* global it, expect */

import React from 'react';
import { shallow } from 'enzyme';

import ChartArea from './ChartArea';

it('renders without crashing', () => {
  const component = shallow(
    <ChartArea
      data={ {} }
      title='Chart'
    />
  );
  expect(component.exists()).toEqual(true);
});
