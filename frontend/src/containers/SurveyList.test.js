/* global it, expect */

import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import SurveyList from './SurveyList';
import SurveyItem from '../components/SurveyItem';

describe('#SurveyList container', () => {
  let component;
  const list = [
    {
      code: '007',
      name: 'Test'
    }
  ]

  beforeEach(() => {
    component = mount(
      <MemoryRouter initialEntries={ [ '/' ] }>
        <SurveyList
          list={ list }
        />
      </MemoryRouter>
    );
  });

  it('renders without crashing', () => {
    expect(component.exists()).toBeTruthy();
  });

  it('should have 1 SurveyItem item', () => {
    const surveyItems = component.find(SurveyItem);

    expect(surveyItems.getElements().length).toEqual(list.length);
  });
});
