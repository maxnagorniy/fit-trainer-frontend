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

    case actionTypes.ADD_DATE_NEW_EXERCISE:
      console.log(action.selectDate);
      return [
        ...state,
        Object.assign({}, action.selectDate)
      ];

    case actionTypes.FILTER_EXERCISE_UP:
      const pivotUp = state.findIndex(data => data.id === action.id);

      const filterUp = [...state].slice(0, Math.max(pivotUp - 1, 0));
      const sliceUp = [...state].slice(pivotUp + 1);
      return [
        ...filterUp,
        ...[state[pivotUp], state[pivotUp - 1]].filter(Boolean),
        ...sliceUp
      ];
    case actionTypes.FILTER_EXERCISE_DOWN:
      const pivotD = state.findIndex(data => data.id === action.id);

      const filterD = [...state].slice(0, Math.max(pivotD + 1, 0));
      const sliceD = [...state].slice(pivotD - 1);
      return [
        ...filterD,
        ...[state[pivotD], state[pivotD + 1]].filter(Boolean),
        ...sliceD
      ];

    case actionTypes.EDIT_EXERCISE:
      console.log(action.exercise);
      return [
        ...state,
        Object.assign({}, action.exercise)
      ];

    default:
      return state;
  }
};