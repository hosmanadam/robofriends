import {
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from '../constants';

const initialStateRobots = {
  robots: [],
  error: '',
  isPending: false,
};

export const robotData = (state=initialStateRobots, action={}) => {
  switch(action.type) {
    case REQUEST_ROBOTS_PENDING:
      return {...state, error: '', isPending: true};
    case REQUEST_ROBOTS_SUCCESS:
      return {...state, robots: action.payload, error: '', isPending: false};
    case REQUEST_ROBOTS_FAILED:
      return {...state, error: action.payload, isPending: false};
    default:
      return state;
  }
};
