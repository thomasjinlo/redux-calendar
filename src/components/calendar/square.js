import React from 'react';

import './calendar.css';

export default props => {
  return (
    <div id={props.dayInMonth} className={props.active + " squares"}
                               onClick={() => {
                                 props.changeDateInMonth(props.date, props.dayInMonth)
                                 props.setActiveToday(props.dayInMonth)
                               }}>
    {props.dayInMonth}</div>
  )
}
