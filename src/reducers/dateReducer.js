export default function (state = new Date(), action) {
  switch (action.type) {
    case 'SET_DATE_TODAY':
      return action.payload
    case 'SET_SELECTED_DATE':
      return action.payload
    case 'INCREMENT_MONTH':
      return action.payload
    default:
      return state
  }
}
