export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAIL = 'FETCH_DATA_FAIL';

export const fetchData = (param) => {  //[#RX2//]
    return { type: FETCH_DATA, payload: param };  //[#RX2//]
};

export const fetchDataSuccess = (sessionData) => {
    return { type: FETCH_DATA_SUCCESS, sessionData: sessionData };
};

export const fetchDataFail = (errorMessage) => {
    return { type: FETCH_DATA_SUCCESS, errorMessage: errorMessage };
};
