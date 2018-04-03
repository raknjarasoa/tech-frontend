/* global expect, it, describe */

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow, mount } from 'enzyme';

import SurveyItem from './SurveyItem';

const code = 'XX2';
const name = 'Njarasoa';

describe('#Survey item feature', () => {
  let component;
  let mountedComponent;
  const mockFunction = jest.fn();

  beforeEach(() => {
    component = shallow(
      <MemoryRouter initialEntries={ [ '/tsykobo' ] }>
        <SurveyItem
          code={ code }
          name={ name }
          onSurveyItemClick={ mockFunction }
        />
      </MemoryRouter>
    )

    mountedComponent = mount(
      <MemoryRouter initialEntries={ [ '/tsykobo' ] }>
        <SurveyItem
          code={ code }
          name={ name }
          onSurveyItemClick={ mockFunction }
        />
      </MemoryRouter>
    )
  });

  it('renders without crashing', () => {
    expect(component.exists()).toEqual(true);
  });

  it('should have one code label', () => {
    expect(mountedComponent.find('label').length).toEqual(1);
  });

  it(`should have one survey title`, () => {
    const title = mountedComponent.find('.survey-item__title');

    expect(title.exists()).toBeTruthy();
  });

  it(`should have ${code} as survey code`, () => {
    const label = mountedComponent.find('label');

    expect(label.text()).toEqual(code);
  });

  it(`should have ${name} as survey title`, () => {
    const title = mountedComponent.find('.survey-item__title');

    expect(title.text()).toEqual(name);
  });
});
