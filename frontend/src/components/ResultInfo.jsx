import React from 'react';
import { shape, object } from 'prop-types';

import VisitDateItem from './VisitDateItem';
import { QuestionType } from '../constants'
import './ResultInfo.css';

const ResultInfo = ({ info }) => {
  const {
    numeric,
    date
  } = info;

  const dateList = date.result.map((v, i) => 
    <VisitDateItem
      key={ i }
      date={ v }
    />
  );

  return (
    <div className='result__informations'>
      <div className='result__content'>
        <h3>{ date.label }</h3>
        <ul>
          { dateList }
        </ul>
        <h3>{ numeric.label }</h3>
        <strong>{ numeric.result }</strong>
      </div>
    </div>
  )
};

ResultInfo.propTypes = {
  info: shape({
    [QuestionType.DATE]: object.isRequired, 
    [QuestionType.NUMERIC]: object.isRequired
  }).isRequired
}

export default ResultInfo;
