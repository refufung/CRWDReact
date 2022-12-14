import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import rootSaga from './sagas/sagas';

// ==============================|| REDUX - MAIN STORE ||============================== //

const sagaMiddleware = createSagaMiddleware();
// const store = createStore(reducer);  //[#RX4//]
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
const persister = 'Free';

export { store, persister };
