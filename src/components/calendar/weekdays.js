import React from 'react';

import './calendar.css'

const WEEKDAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

export default () => {
  return (
    <header className="weekdaysContainer">
      { WEEKDAYS.map( (item, idx) => <div key={idx} className="weekday">{ item }</div>) }
    </header>
  )
}
