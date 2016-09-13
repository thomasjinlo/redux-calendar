export default function (state=new Date().getDate(), action) {
  switch (action.type) {
    case 'SET_ACTIVE_TODAY':
      return action.payload;
    default:
      return state
  }
}
