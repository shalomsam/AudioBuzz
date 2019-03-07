import * as Actions from './types';
import { MusicService } from '../services/MusicService';

export const tracksFetch = (library = 'mixed', location = 'us') => {
  return (dispatch) => {
    dispatch({
      type: Actions.TRACKS_FETCH,
      payload: {library, location}
    });

    MusicService.getTracks(library, location)
      .then(tracks => {
        dispatch({
          type: Actions.TRACKS_FETCH_SUCCESS,
          payload: {
            library,
            location,
            tracks,
          }
        });
      })
      .catch(error => {
        dispatch({
          type: Actions.ERROR_ADD,
          payload: {error},
        })
      });
  }
}
