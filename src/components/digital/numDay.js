import React from 'react';

const numDay = date => date.getDate();

export default props => {
  return (
    <div className="numDay">
      { numDay(props.date) }
    </div>
  )
}
