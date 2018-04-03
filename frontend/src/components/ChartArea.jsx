import React from 'react';
import { object } from 'prop-types';
import { Doughnut } from 'react-chartjs-2';

import { QuestionType } from '../constants'
import './ChartArea.css';

function formatChartData(inputs) {
  if (!inputs) return {};

  return {
    labels: Object.keys(inputs),
    datasets: [{
      data: Object.values(inputs),
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#2ecc71',
        '#9b59b6',
        '#2c3e50'
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#2ecc71',
        '#9b59b6',
        '#2c3e50'
      ]
    }]
  };
}

const ChartArea = ({ qcm }) => {
  debugger;
  const config = formatChartData(qcm.result);

  return (
    <div className='result__chart'>
      <h3>{ qcm.label }</h3>
      <div id='chart'>
        <Doughnut data={ config } />
      </div>
    </div>
  )
};

ChartArea.propTypes = {
  [QuestionType.QCM]: object.isRequired
}

ChartArea.defaultProps = {
  [QuestionType.QCM]: {}
}

export default ChartArea;
