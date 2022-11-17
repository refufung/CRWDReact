import axios from "./axiosInstance";

export const fetchSessionData = (param) => { 
  console.log('API CALL...');
  console.log(`xxx(param)1:${JSON.stringify(param)}`);
  const ipmoeUnlockPageServiceUri = window.ENV.SAMPLE_SERVICE + '/test-als-log';
  console.log(`xxx(ipmoeUnlockPageServiceUri)1:${ipmoeUnlockPageServiceUri}`);
  return axios
      .request({
        url: ipmoeUnlockPageServiceUri,
        method: 'get',
        headers: {
        },
        data: JSON.stringify({
        })
      })
      .then((response) => response.data)
      .catch((err) => {
        console.log(err);
        throw err;
      });
};

export const getRequestEnquiryByFilter = (inputParam) => {  //[#RX2//]
  console.log('API CALL...');
  console.log(`xxx(param)1:${JSON.stringify(inputParam)}`);
  console.log(`xxx(param)2:${JSON.stringify(inputParam.reqCaseNo)}`);
  const ipmoeUnlockPageServiceUri = window.ENV.SAMPLE_SERVICE + '/' + 'api'+ '/' +'IpOrderLock';
      //+ '/' + param.reqCaseNo;
  console.log(`xxx(ipmoeUnlockPageServiceUri)1:${ipmoeUnlockPageServiceUri}`);
  return axios
      .request({
        url: ipmoeUnlockPageServiceUri,
        method: 'post',
         withCredentials: true,
        headers: {
          "Accept": 'application/json',
          'Content-Type': 'application/json;  charset=utf-8',
          Authorization: `Bearer [value of cookie cms-access-token]`
        },
        data: JSON.stringify({
          "patHospcode": (inputParam.reqHospCode)? inputParam.reqHospCode : '',
          "caseNo": (inputParam.reqCaseNo)? inputParam.reqCaseNo : ''
        })
      })
      .then((response) => {
          console.log(`xxx(response)1:${JSON.stringify(response)}`);
          return response.data;
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
};

export const deleteRequestEnquiryByFilter = (inputParam) => {  //[#RX2//]
    console.log('API CALL...');
    console.log(`xxx(param)1:${JSON.stringify(inputParam)}`);
    console.log(`xxx(param)2:${JSON.stringify(inputParam.reqCaseNo)}`);
    const deleteipmoeUnlockPageServiceUri = window.ENV.SAMPLE_SERVICE + '/' + 'api'+ '/' +'deleteIpOrderLock';
    console.log(`xxx(ipmoeUnlockPageServiceUri)1:${deleteipmoeUnlockPageServiceUri}`);
    return axios
        .request({
            url: deleteipmoeUnlockPageServiceUri,
            method: 'post',
            withCredentials: true,
            headers: {
                "Accept": 'application/json',
                'Content-Type': 'application/json;  charset=utf-8',
                Authorization: `Bearer [value of cookie cms-access-token]`
            },
            data: JSON.stringify({
                "patHospcode": (inputParam.reqHospCode)? inputParam.reqHospCode : '',
                "caseNo": (inputParam.reqCaseNo)? inputParam.reqCaseNo : ''
            })
        })
        .then((response) => {
            console.log(`xxx(response)1:${JSON.stringify(response)}`);
            return response.data;
        })
        .catch((err) => {
            console.log(err);
            throw err;
        });
};

