import React, { Component } from 'react';
import { array } from 'prop-types';

import SurveyItem from '../components/SurveyItem';

export default class SurveyList extends Component {
  state = {
    selection: ''
  }

  static propTypes = {
    list: array.isRequired
  }

  static defaultProps = {
    list: []
  }

  handleSurveyItemClick = e => {
    const { code } = e.currentTarget.dataset;

    this.setState(prevState => ({
      selection: code
    }));
  }

  render() {
    const items = this.props.list.map(v => {
      const isSelected = v.code === this.state.selection;

      return (
        <SurveyItem
          key={v.code}
          code={v.code}
          name={v.name}
          onSurveyItemClick={ this.handleSurveyItemClick }
          isSelected={isSelected}
        />
      );
    });

    return (
      <ul className='survey-list'>
        {items}
      </ul>
    )
  }
}
