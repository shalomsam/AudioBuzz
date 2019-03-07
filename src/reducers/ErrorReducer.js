import * as Actions from '../actions/types';

const INITIAL_STATE = {
  errors: []
};

const errorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Actions.ERROR_ADD:
      return Object.assign({}, state, {
        errors: state.errors.push(action.payload.error)
      });

    case Actions.ERROR_REMOVE:
      return Object.assign({}, state, {
        errors: state.errors.filter((error) => error === action.payload.error)
      });

    default:
      return state;
  }
};

export default errorReducer;
