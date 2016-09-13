import React from 'react';

import './calendar.css';
import EmptySquare from './emptySquare';
import Square from './square';

const startDay = date => new Date(date.getFullYear(), date.getMonth(), 1).getDay();
const numDaysInMonth = date => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

const renderEmptySquares = (startDay, collection=[]) => {
  if (startDay === 0) return;

  collection.push(<EmptySquare key={startDay} startDay={startDay} />);
  renderEmptySquares((startDay - 1), collection)

  return collection.map( div => div);
};

const renderSquares = (dayInMonth, collection=[], changeDateInMonth, date) => {
  if (dayInMonth === 0) return;
  
  collection.unshift(<Square key={dayInMonth}
                             dayInMonth={dayInMonth}
                             changeDateInMonth={changeDateInMonth}
                             date={date} />);
  renderSquares((dayInMonth - 1), collection, changeDateInMonth, date);

  return collection.map( div => div);
}

export default props => {
  return (
    <div className="squaresContainer">
      { renderEmptySquares(startDay(props.date)) }
      { renderSquares(numDaysInMonth(props.date), [], props.changeDateInMonth, props.date) }
    </div>
  )
}
