import React from 'react';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthYear = (date, MONTHS) => {
  return `${MONTHS[date.getMonth()]} ${date.getFullYear()}`
}

export default props => {
  return (
    <div className="monthYearContainer">
      <div className="leftArrow"
           onClick={() => props.changeMonth(props.date, -1)}></div>
      <div className="monthYear">{monthYear(props.date, MONTHS)}</div>
      <div className="rightArrow"
           onClick={() => props.changeMonth(props.date, 1)}></div>
    </div>
  )
}
