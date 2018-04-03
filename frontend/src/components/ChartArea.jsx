import React from 'react';
import { string, object } from 'prop-types';
import { Doughnut } from 'react-chartjs-2';

import './ChartArea.css';

const datatest = {
  labels: [
    'Red',
    'Green',
    'Yellow'
  ],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ]
  }]
};

const ChartArea = ({ data, title }) => {
  return (
    <div className='result__chart'>
      <h3>{title}</h3>
      <div id='chart'>
        <Doughnut data={datatest} />
      </div>
    </div>
  )
};

ChartArea.propTypes = {
  data: object.isRequired,
  title: string.isRequired
}

export default ChartArea;
