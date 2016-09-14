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

const setActive = (day, activeDay) => {
  console.log(`ID ${day}`, `ActiveID ${activeDay}`)
  return day === activeDay ? "active" : ""
}

const renderSquares = (dayInMonth, collection=[], props) => {
  if (dayInMonth === 0) return;

  collection.unshift(<Square key={dayInMonth}
                             dayInMonth={dayInMonth}
                             changeDateInMonth={props.changeDateInMonth}
                             date={props.date}
                             active={setActive(dayInMonth, props.activeID)}
                             setActiveToday={props.setActiveToday} />);
  renderSquares((dayInMonth - 1), collection, props);

  return collection.map( div => div);
}

export default props => {
  return (
    <div className="squaresContainer">
      { renderEmptySquares(startDay(props.date)) }
      { renderSquares(numDaysInMonth(props.date), [], props) }
    </div>
  )
}
