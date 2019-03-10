/* Redux reducers */

import {ADD_ROBOTS, CHANGE_SEARCH_FIELD} from './constants';

const initialState = {
  searchField: '',
  robots: [],
};

export const searchRobots = (state=initialState, action={}) => {
  switch(action.type) {
    case CHANGE_SEARCH_FIELD:
      return {...state, searchField: action.payload};
    case ADD_ROBOTS:
      return {...state, robots: action.payload};
    default:
      return state;
  }
};
