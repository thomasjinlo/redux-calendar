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
