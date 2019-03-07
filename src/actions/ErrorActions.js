import * as Actions from './types';

export const addError = (error) => {
  return (dispatch) => {
    dispatch({
      type: Actions.ERROR_ADD,
      payload: {error: error}
    });
  }
}

export const removeError = (error) => {
  return (dispatch) => {
    dispatch({
      type: Actions.ERROR_REMOVE,
      payload: {error: error}
    });
  }
}

export const showError = (error) => {``
  return (dispatch) => {
    dispatch({
      type: Actions.ERROR_SHOW,
      payload: {error: error}
    });
  }
}
