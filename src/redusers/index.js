import { combineReducers } from 'redux';
import exercises from './exerciseReducer';

export default combineReducers({
  exercises: exercises
});