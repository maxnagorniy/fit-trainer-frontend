import * as actionTypes from './actionTypes';

export const newExercise = (exercise) => {
  return {
    type: actionTypes.ADD_EXERCISE,
    exercise: exercise
  }
};

export const deleteExercise = (id) => {
  return {
    type: actionTypes.DELETE_EXERCISE,
    id: id
  }
};