const initialState = {
  sessionDataJSON: ''
};

export default function reducer (state = initialState, action) {  //[#RX4//]
    var newState;

    switch (action.type) {
        case 'FETCH_DATA_SUCCESS':
            console.log('FETCH_DATA_SUCCESS...');
            console.log('  action.sessionData: ' + action.sessionData);

            newState = {...state, sessionDataJSON: action.sessionData};
            return newState;

        case 'FETCH_DATA_FAIL':
            console.log('FETCH_DATA_FAIL...');
            console.log('  action.errorMessage: ' + action.errorMessage);

            newState = {...state, sessionDataJSON: action.errorMessage};
            return newState;

        default:
            return state;
    }
}
