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

export const filterExerciseUp = (id) => {
  return {
    type: actionTypes.FILTER_EXERCISE_UP,
    id: id
  }
};

export const editExercise = (exercise, id) => {
  return {
    type: actionTypes.EDIT_EXERCISE,
    id: id,
    exercise: exercise
  }
};