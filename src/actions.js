/* Redux actions */

import {CHANGE_SEARCH_FIELD, ADD_ROBOTS} from './constants';

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

export const setRobotData = (robots) => ({
  type: ADD_ROBOTS,
  payload: robots
});
