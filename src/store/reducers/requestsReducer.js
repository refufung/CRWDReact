import { requestsActionTypes } from '../actions/actionTypes';

const initialState = {
  requests: [],
  delete: [],
  err: '',
};

const requestsReducer = (state = initialState, action) => {
  let id;
  switch (action.type) {
    case requestsActionTypes.GET_REQUESTS_SUCCESS:
      return {
        ...state,
        requests: action.payload
      };
    case requestsActionTypes.GET_REQUESTS_FAIL:
      return {
        ...state,
        err: action.payload
      };
    case requestsActionTypes.DELETE_REQUESTS_SUCCESS:
      return {
        ...state,
        delete: action.payload
      };
    case requestsActionTypes.DELETE_REQUESTS_FAIL:
      return {
        ...state,
        err: action.payload
      };
    default:
      return state;
  }
};

export default requestsReducer;
