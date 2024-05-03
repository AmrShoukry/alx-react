import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

function selectCourse(index) {
  return {
    type: SELECT_COURSE,
    index: index,
  };
}

export const selectCourseBound = (index) => dispatch(selectCourse(index));

function unSelectCourse(index) {
  return {
    type: UNSELECT_COURSE,
    index: index,
  };
}

export const unSelectCourseBound = (index) => dispatch(unSelectCourse(index));

