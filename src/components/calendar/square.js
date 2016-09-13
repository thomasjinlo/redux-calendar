import React from 'react';

import './calendar.css';

export default props => {
  return (
    <div id={props.dayInMonth} className="squares" onClick={() => props.changeDateInMonth(props.date, props.dayInMonth)}>{props.dayInMonth}</div>
  )
}
