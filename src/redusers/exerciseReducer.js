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
    default:
      return state;
  }
};