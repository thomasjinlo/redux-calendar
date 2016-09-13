import React from 'react';

import './calendar.css';

const activeDate = (id, activeID) => {
  console.log(id, activeID)
  return id === activeID
}

export default props => {
  return (
    <div id={props.dayInMonth} className={`squares ${activeDate(props.dayInMonth, props.activeID) ? "active" : ""}`}
                               onClick={() => {
                                 console.log(props)
                                 props.changeDateInMonth(props.date, props.dayInMonth)
                                 props.setActiveToday(props.dayInMonth)
                               }}>
    {props.dayInMonth}</div>
  )
}
