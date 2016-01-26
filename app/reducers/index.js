import { combineReducers } from 'redux';

import matrix from './matrix';
import generations from './generations';
import status from './status';

export default combineReducers({
  matrix,
  generations,
  status
});
