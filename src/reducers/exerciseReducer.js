import * as actionTypes from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type){
    case actionTypes.ADD_EXERCISE:
      return [
        ...state,
        Object.assign({}, action.exercise)
      ];
    case actionTypes.DELETE_EXERCISE:
      return state.filter((data, i) => i !== action.id);
    // case actionTypes.FILTER_EXERCISE_UP:
    //   return [state];
    // case actionTypes.FILTER_EXERCISE_UP:
    //   let position = -1;
    //   let exercise = null;
    //   state.filter((data, i) => {
    //     if(data.id === action.id) {
    //       position = i;
    //       exercise = data;
    //       return false;
    //     } else {
    //       return true;
    //     }
    //   });
    //   return state.splice(position - 1, 0, exercise);
    default:
      return state;
  }
};