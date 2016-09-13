export function setDateToday () {
  let date = new Date();

  return {
    type: 'SET_DATE_TODAY',
    payload: date,
  }
}

export function changeDateInMonth (date, selectedDay) {
  let newDate = new Date(date.getFullYear(), date.getMonth(), selectedDay);
  console.log(newDate)
  return {
    type: 'SET_SELECTED_DATE',
    payload: newDate,
  }
}
