import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from '../actions/courseActionTypes';

initialState = [];

export function courseReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      return action.data.map((course) => {
        return { ...course, isSelected: false };
      });

    case SELECT_COURSE:
      return action.data.map((course) => {
        return {
          ...course,
          isSelected: course.id === action.index ? true : course.isSelected,
        };
      });

    case UNSELECT_COURSE:
      return action.data.map((course) => {
        return {
          ...course,
          isSelected: course.id === action.index ? false : course.isSelected,
        };
      });

    default:
      return state;
  }
}

