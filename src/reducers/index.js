/* Redux reducers */

import {searchRobots} from './searchRobots';
import {robotData} from './robotData';
import {combineReducers} from 'redux';

export default combineReducers({
  searchRobots,
  robotData,
});
