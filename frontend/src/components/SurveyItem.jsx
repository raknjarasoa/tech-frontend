import React from 'react';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';

import './SurveyItem.css';

const SurveyItem = ({ code='', name='' }) => {
  const to = `/survey/${code}`;

  return (
    <li className='survey-item'>
      <Link to={ to } className='survey-item__wrapper'>
        <div className='survey-item__indicator'>
          <input type='checkbox' aria-label='indicator' />
          <label aria-hidden='true'>{ code }</label>
        </div>
        <div className='survey-item__text'>
          <h2 className='survey-item__title'>{ name }</h2>
        </div>
      </Link>
    </li>
  )
};

SurveyItem.propTypes = {
  code: string.isRequired,
  name: string.isRequired
}

export default SurveyItem;
