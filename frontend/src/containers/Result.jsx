import React from 'react';
import { object } from 'prop-types';

import ChartArea from '../components/ChartArea';
import ResultInfo from '../components/ResultInfo';

const Result = ({ surveyResult }) => {
  const {
    qcm,
    date,
    numeric
  } = surveyResult;

  return (
    <section className='result'>
      <hr />
      <h2>Result</h2>
      <div className='result__wrapper'>
        <ChartArea
          qcm={ qcm }
        />
        <ResultInfo
          date={ date }
          numeric={ numeric }
        />
      </div>
    </section>
  )
};

Result.propTypes = {
  match: object.isRequired,
  surveyResult: object.isRequired
}

export default Result;
