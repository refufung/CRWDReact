import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers/reducers';
import rootSaga from './sagas/sagas';

const initialState = {
   sessionDataJSON: ''
};

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
console.log(store);
export default store;
