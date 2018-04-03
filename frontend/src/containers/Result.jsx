import React, { Component } from 'react';
import { object } from 'prop-types';

import ChartArea from '../components/ChartArea';
import ResultInfo from '../components/ResultInfo';

import { getSurveyById } from '../api';

export default class Result extends Component {
  state = {
    surveyResult: {}
  }

  static propTypes = {
    match: object.isRequired
  }

  componentDidMount() {
    const { surveyId } = this.props.match.params;

    getSurveyById(surveyId)
      .then((data) => {
        return this.transformData(data)
      })
      .then((obj) => {
        this.setState(prevState => ({
          surveyResult: obj
        }));
      });
  }

  /**
   * 
   * @param {object} data 
   * Structured the payload data
   */
  transformData(data) {
    return data.reduce((acc, v) => {
      const { label, type, result } = v;
      acc[type] = {
        label,
        result
      }
      return acc;
    }, {})
  }

  render() {
    debugger
    const {
      qcm,
      date,
      numeric
    } = this.state.surveyResult;

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
  }
}
