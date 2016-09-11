import React from 'react';

import './weekdays.css'

const WEEKDAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

export default () => {
  return (
    <header>
      { WEEKDAYS.map( (item, idx) => <div key={idx} className="weekday">{ item }</div>) }
    </header>
  )
}
