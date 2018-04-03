import React, { Component } from 'react';
import { array, string, func } from 'prop-types';

import SurveyItem from '../components/SurveyItem';

export default class SurveyList extends Component {

  static propTypes = {
    list: array.isRequired,
    selection: string.isRequired,
    onSurveyItemClick: func.isRequired,
  }

  static defaultProps = {
    list: []
  }

  render() {
    const {
      list,
      selection,
      onSurveyItemClick
    } = this.props;
    const items = list.map(v => {
      const isSelected = v.code === selection;

      return (
        <SurveyItem
          key={v.code}
          code={v.code}
          name={v.name}
          onSurveyItemClick={ onSurveyItemClick }
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
