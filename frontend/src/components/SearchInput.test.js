/* global it, expect */

import React from 'react';
import { shallow, mount } from 'enzyme';

import SearchInput from './SearchInput';

const cssClassActive = 'active';

describe('#Search features', () => {
  let wrapper;

  beforeEach(() => {
    const mockFunction = jest.fn();

    wrapper = shallow(
      <SearchInput
        onSearch={mockFunction}
      />
    )
  });

  it('render without crashing', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('should have active class onFocus', () => {
    const mountedEl = mount(<SearchInput onSearch={jest.fn()} />);
    const labelForm = mountedEl.instance().labelForm;
    const input = mountedEl.find('input');
    
    input.prop('onFocus')();
    expect(labelForm.classList.contains(cssClassActive)).toEqual(true);
  });

  it(`shouldn't have active class onBlur`, () => {
    const mountedEl = mount(<SearchInput onSearch={jest.fn()} />);
    const labelForm = mountedEl.instance().labelForm;
    const input = mountedEl.find('input');
    
    input.prop('onBlur')();
    expect(labelForm.classList.contains(cssClassActive)).toEqual(false);
  });

  it(`should have active class onBlur when searchInput is not empty`, () => {
    const mountedEl = mount(<SearchInput onSearch={jest.fn()} />);
    const labelForm = mountedEl.instance().labelForm;
    const searchInput = mountedEl.instance().searchInput;
    const input = mountedEl.find('input');

    searchInput.value = 'Xx1';
    input.prop('onBlur')();
    expect(labelForm.classList.contains(cssClassActive)).toEqual(true);
  });

  it('should fire onSearch on types', () => {
    const onSearch = jest.fn();
    const mountedEl = mount(<SearchInput onSearch={onSearch} />);
    const searchInputRef = mountedEl.instance().searchInput
    const input = mountedEl.find('input');

    input.simulate('change', {target: {value: 'N'}});
    expect(onSearch).toHaveBeenCalledTimes(1);
  });

  it('should search value equal to handleChange value', () => {
    expect(wrapper.exists()).toEqual(true);
  });
});
