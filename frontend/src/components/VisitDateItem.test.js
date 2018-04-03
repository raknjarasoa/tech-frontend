/* global expect, it, describe */

import React from 'react';
import { shallow } from 'enzyme';

import VisitDateItem, { formatDate } from './VisitDateItem';

describe('#Visit date item feature', () => {
  let component;
  const date='2016-08-28T12:04:50.000Z';

  beforeEach(() => {
    component = shallow(
      <VisitDateItem
        date={ date }
      />
    );
  });

  it('renders without crashing', () => {
    expect(component.exists()).toBeTruthy();
  });

  it(`should have one li date element`, () => {
    expect(component.type()).toEqual('li');
  });

  it(`should render ${formatDate(date)} as survey code`, () => {
    expect(formatDate(component.text())).toEqual(formatDate(date));
  });
});
