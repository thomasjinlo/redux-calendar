import { combineReducers } from 'redux';

import dateReducer from './dateReducer';
import selectedDateReducer from './selectedDateReducer';

const rootReducer = combineReducers({
  date: dateReducer,
  activeID: selectedDateReducer,
});

export default rootReducer;
