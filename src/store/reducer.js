import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
import sessionReducer from './reducers/reducers';
import requestsReducer from './reducers/requestsReducer';
// import printReducer from './reducers/printReducer';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
    customization: customizationReducer,
    session: sessionReducer,  //[#RX4//]
    requests: requestsReducer,
    // print: printReducer,
});

export default reducer;
