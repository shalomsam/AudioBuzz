import * as Actions from '../actions/types';

const INITIAL_STATE = {
  library: 'mixed',
  location: 'us',
  tracks: [],
}

export default tracksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Actions.TRACKS_FETCH:
      return {
        library: action.payload.library,
        location: action.payload.location,
        tracks: []
      };

    case Actions.TRACKS_FETCH_SUCCESS:
      return {
        library: action.payload.library,
        location: action.payload.location,
        tracks: action.payload.tracks,
      };

    default:
      return state;

  }
};
