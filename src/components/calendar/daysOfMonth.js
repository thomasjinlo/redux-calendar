import React from 'react';

import './calendar.css';

const startDay = date => new Date(date.getFullYear(), date.getMonth(), 1).getDay();
const numDaysInMonth = date => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

const renderEmptySquares = (startDay, collection=[]) => {
  if (startDay === 0) return;

  collection.push(<div key={startDay} className="squares"></div>);
  renderEmptySquares((startDay - 1), collection)

  return collection.map( div => div);
};

const renderSquares = (daysInMonth, collection=[]) => {
  if (daysInMonth === 0) return;

  collection.unshift(<div key={daysInMonth} id={daysInMonth} className="squares">{daysInMonth}</div>);
  renderSquares((daysInMonth - 1), collection);

  return collection.map( div => div);
}

export default props => {
  return (
    <div className="squaresContainer">
      { renderEmptySquares(startDay(props.date)) }
      { renderSquares(numDaysInMonth(props.date)) }
    </div>
  )
}
