import { combineReducers } from 'redux';
import ErrorReducer from './ErrorReducer';
import TracksReducer from './TracksReducer';

export default combineReducers({
  error: ErrorReducer,
  tracks: TracksReducer,
});
