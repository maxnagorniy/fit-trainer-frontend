const exerciseArr = [];

export default function exercise(state = exerciseArr, action) {
  if(action.type === 'ADD_EXERCISE') {
    return [
      ...state,
      action.payload
    ]
  }
  return state;
}