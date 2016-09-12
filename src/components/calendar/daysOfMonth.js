import React from 'react';

import './calendar.css';

const startDay = date => new Date(date.getFullYear(), date.getMonth(), 1).getDay();
const numDaysInMonth = date => new Date(date.getFullYear(), date.getMonth() + 1, 0);

const renderEmptySquares = (startDay, collection=[]) => {
  if (startDay === 0) return;

  collection.push(<div key={startDay} className="weekday"></div>);
  renderEmptySquares((startDay - 1), collection)

  return collection.map( div => div);
};

export default props => {
  return (
    <div>
      { renderEmptySquares(startDay(props.date)) }
      { numDaysInMonth }
    </div>
  )
}
