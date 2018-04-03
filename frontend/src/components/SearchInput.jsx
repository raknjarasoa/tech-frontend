import React, { PureComponent } from 'react';
import { func } from 'prop-types';

import './SearchInput.css';

export default class SearchInput extends PureComponent {
  static propTypes = {
    onSearch: func.isRequired
  }

  handleOnChange = e => {
    this.props.onSearch(e.currentTarget.value);
  }

  handleOnFocus = e => {
    this.labelForm.classList.add('active')
  }

  handleOnBlur = e => {
    if (!this.searchInput.value) {
      this.labelForm.classList.remove('active');
    }
    else {
      this.labelForm.classList.add('active')
    }
  }

  setSearchInputRef = input => this.searchInput = input;

  setLabelFormRef = label => this.labelForm = label;

  render() {
    return (
      <div className='search'>
        <label className='search__wrapper' htmlFor='search__input' aria-hidden='true'
          ref={this.setLabelFormRef}
        >
          <span className='hidden'>Search</span>
          <input className='search__input' id='search__input' type='text' aria-label='Search'
            onFocus={this.handleOnFocus}
            onBlur={this.handleOnBlur}
            onChange={this.handleOnChange}
            ref={this.setSearchInputRef}
          />
        </label>
      </div>
    );
  }
}
