/* global it, expect */

import React from 'react';
import { mount } from 'enzyme';

import ResultInfo from './ResultInfo';
import VisitDateItem from '../components/VisitDateItem';

describe('#Result info feature', () => {
  let component;
  const info = {
    date: {
      label: 'Test',
      result: [
        '2017-06-09T00:00:00.000Z',
        '2017-06-09T00:00:00.000Z'
      ]
    },
    numeric: {
      label: 'Test',
      result: 123456
    }
  };

  beforeEach(() => {
    component = mount(
      <ResultInfo
        info={ info }
      />
    );
  });

  it('renders without crashing', () => {
    expect(component.exists()).toBeTruthy();
  });

  it('should have 2 VisitDateItem items', () => {
    const visitDateItems = component.find(VisitDateItem);

    expect(visitDateItems.getElements().length).toEqual(info.date.result.length);
  });
});
