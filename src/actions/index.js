export function setDateToday () {
  let date = new Date();

  return {
    type: 'SET_DATE_TODAY',
    payload: date,
  }
}

export function changeDateInMonth (date, selectedDay) {
  let newDate = new Date(date.getFullYear(), date.getMonth(), selectedDay);

  return {
    type: 'SET_SELECTED_DATE',
    payload: newDate,
  }
}

export function setActiveToday (id) {
  return {
    type: 'SET_ACTIVE_TODAY',
    payload: id,
  }
}

const checkLastDate = (date, increment) => {
  let currentMonth = date.getDate();
  let nextMonth = new Date(date.getFullYear(), date.getMonth() + increment, date.getDate()).getDate();

  if ( currentMonth === nextMonth ) {
    return new Date(date.getFullYear(), date.getMonth() + increment, date.getDate())
  } else {
    return new Date(date.getFullYear(), date.getMonth() + increment + increment, 0);
  }
}

export function changeMonth (date, increment) {
  // increment will be -1 or +1 depending on which arrow button was clicked
  let newDate = date.getDate() < 29 ? new Date(date.getFullYear(), date.getMonth() + increment, date.getDate()) : checkLastDate(date, increment)
  let id = newDate.getDate();

  return (dispatch) => {
    dispatch({type: 'INCREMENT_MONTH', payload: newDate})
    dispatch({type: 'SET_ACTIVE_TODAY', payload: id})
  }
}
