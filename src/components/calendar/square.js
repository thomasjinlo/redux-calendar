import React from 'react';

import './calendar.css';

export default props => {
  return (
    <div id={props.dayInMonth} className="squares">{props.dayInMonth}</div>
  )
}
