import React from 'react';

const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const wordDay = (date, WEEKDAYS) => WEEKDAYS[date.getDay()];

export default props => {
  return (
    <div className="wordDay">
      <div className="word">
        { wordDay(props.date, WEEKDAYS) }
      </div>
    </div>
  )
}
