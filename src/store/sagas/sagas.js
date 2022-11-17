import { call, put, takeEvery, all, select } from 'redux-saga/effects'
import { fetchSessionData, getRequestEnquiryByFilter, deleteRequestEnquiryByFilter } from '../api/api';
import { requestsActionTypes } from '../actions/actionTypes';

const getipmoeUnlockPageServiceUri = (state) => state.ipmoeUnlockPageServiceUri;
const deleteipmoeUnlockPageServiceUri = (state) => state.ipmoeUnlockPageServiceUri;

function* callFetchDataSaga(action) {
  console.log(`xxx(action.payload)1:${JSON.stringify(action.payload)}`);
  const ipmoeUnlockPageServiceUri = yield select(getipmoeUnlockPageServiceUri);
  console.log(`xxx(ipmoeUnlockPageServiceUri)1:${ipmoeUnlockPageServiceUri}`);
  try {
    const response = yield call(fetchSessionData, action.payload);  //[#RX2//]
    yield put({ type: 'FETCH_DATA_SUCCESS', sessionData: response });
  }
  catch (e) {
    yield put({ type: 'FETCH_DATA_FAIL', errorMessage: e.message });
  }
}

function* getRequests(action) {
  console.log(`xxx(action.payload)1:${JSON.stringify(action.payload)}`);
  const ipmoeUnlockPageServiceUri = yield select(getipmoeUnlockPageServiceUri);
  console.log(`xxx(ipmoeUnlockPageServiceUri)1:${ipmoeUnlockPageServiceUri}`);
  try {
    // const response = yield call(fetchSessionData, ipmoeUnlockPageServiceUri);  //[#//]ipmoeUnlockPageServiceUri optional & is undefined here
    const response = yield call(getRequestEnquiryByFilter, action.payload);
    yield put({
      type: requestsActionTypes.GET_REQUESTS_SUCCESS,
      payload: response
    });
  }
  catch (e) {
    yield put({
      type: requestsActionTypes.GET_REQUESTS_FAIL,
      payload: e.message
    });
  }
}

function* deleteRequests(action) {
  console.log(`xxx(action.payload)1:${JSON.stringify(action.payload)}`);
  const ipmoeUnlockPageServiceUri = yield select(deleteipmoeUnlockPageServiceUri);
  console.log(`xxx(ipmoeUnlockPageServiceUri)1:${ipmoeUnlockPageServiceUri}`);
  try {
    // const response = yield call(fetchSessionData, ipmoeUnlockPageServiceUri);  //[#//]ipmoeUnlockPageServiceUri optional & is undefined here
    const response = yield call(deleteRequestEnquiryByFilter, action.payload);
    yield put({
      type: requestsActionTypes.DELETE_REQUESTS_SUCCESS,
      payload: response
    });
  }
  catch (e) {
    yield put({
      type: requestsActionTypes.DELETE_REQUESTS_FAIL,
      payload: e.message
    });
  }
}

function* rootSaga() {
  yield all([
    takeEvery('FETCH_DATA', callFetchDataSaga),
    takeEvery(requestsActionTypes.GET_REQUESTS, getRequests),
    takeEvery(requestsActionTypes.DELETE_REQUESTS, deleteRequests),
  ]);
}

export default rootSaga;
