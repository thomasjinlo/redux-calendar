import React from 'react';

const numDay = date => date.getDate();

export default props => {
  return (
    <div>
      { numDay(props.date) }
    </div>
  )
}
