import React from 'react';
import { string } from 'prop-types';

export function formatDate(date) {
  const d = new Date(date);

  return d.toLocaleString();
}

const VisitDateItem = ({ date }) => {
  return (
    <li>{ formatDate(date) }</li>
  )
};

VisitDateItem.propTypes = {
  date: string.isRequired
};

export default VisitDateItem;
