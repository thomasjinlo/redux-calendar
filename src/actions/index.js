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

export function changeMonth (date, increment) {
  // increment will be -1 or +1 depending on which arrow button was clicked
  let newDate = new Date(date.getFullYear(), date.getMonth() + increment, date.getDate());

  return {
    type: 'INCREMENT_MONTH',
    payload: newDate,
  }
}
