import { combineReducers } from 'redux';

import exercise from './exercises';
import database from './default';

export default combineReducers({
  database,
  exercise
})