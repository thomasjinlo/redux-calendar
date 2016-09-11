export function setDateToday () {
  let date = new Date();
  
  return {
    type: 'SET_DATE_TODAY',
    payload: date,
  }
}
