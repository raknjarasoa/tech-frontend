import React from 'react';
import { object } from 'prop-types';

import VisitDateItem from './VisitDateItem';
import { QuestionType } from '../constants'
import './ResultInfo.css';

const ResultInfo = ({ numeric, date}) => {
  const dateList = date && date.result && date.result.map((v, i) => 
    <VisitDateItem
      key={ i }
      date={ v }
    />
  );

  return (
    <div className='result__informations'>
      <div className='result__content'>
        <h3>{ date && date.label }</h3>
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
  [QuestionType.DATE]: object.isRequired,
  [QuestionType.NUMERIC]: object.isRequired
}

ResultInfo.defaultProps = {
  [QuestionType.DATE]: {},
  [QuestionType.NUMERIC]: {}
}

export default ResultInfo;
