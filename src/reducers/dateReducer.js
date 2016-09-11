export default function (state = new Date(), action) {
  switch (action.type) {
    case 'SET_DATE_TODAY':
      return action.payload
    default:
      return state
  }
}
