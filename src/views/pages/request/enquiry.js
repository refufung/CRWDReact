import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { DataGrid, GridValueGetterParams } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { requestsActionTypes } from 'store/actions/actionTypes';
import "./equiry.css"

const closeTab = () => {
  window.opener = null;
  window.open("", "_self");
  window.close();
};

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: 550,
  width: '100%',
  '& .MuiFormGroup-options': {
    alignItems: 'center',
    paddingBottom: theme.spacing(1),
    '& > div': {
      minWidth: 100,
      margin: theme.spacing(2),
      marginLeft: 0,
    },
  },
}));

function FilterPanel(props) {
  const {retrieveRequests, deleteRequests} = props;


  const [filters, setFilters] = React.useState({
    requestHospital: '',
    requestCaseNo: ''
  });

  const handleChangeFilters = React.useCallback((prop) => (event) => {
    setFilters({ ...filters, [prop]: event.target.value });
    console.log(`xxx(filters)1:${JSON.stringify(filters)}`);
  }, [filters]);

  const handleRetrieveRequests = React.useCallback(() => {
    console.log(`xxx(filters)2:${JSON.stringify(filters)}`);
    retrieveRequests({
      requestHospital: filters?.requestHospital,
      requestCaseNo: filters?.requestCaseNo,
    });
  }, [filters, retrieveRequests]);

  const handleDeleteUnlock = React.useCallback(() => {
    console.log(`xxx(requests)2:${JSON.stringify(filters)}`);
    deleteRequests({
      requestHospital: filters?.requestHospital,
      requestCaseNo: filters?.requestCaseNo,
    });
    }, [filters, deleteRequests]);

  return (
      <Grid container className={`main-ctn`} spacing={2}>
        <h1 id="hospitalCode">Hospital</h1>
        <Grid container item xs={18} sy={{ mb: 0.5 }}>
          <div className="mb-4 align-middle" style={{display: 'flex', flexDirection: 'row'}}>
            <label id="hospitalCode">Hospital Code:
              <input value={filters?.requestHospital} onChange={handleChangeFilters('requestHospital')}>
              </input>
            </label>
          </div>
        </Grid>

        <Grid container item xs={18} sy={{ mb: 0.5 }}>
          <div className="mb-4 align-middle" style={{display: 'flex', flexDirection: 'row'}}>
            <label id="CaseNo"> Case No.:
              <input value={filters?.requestCaseNo} onChange={handleChangeFilters('requestCaseNo')}>
              </input>
              <span id="e.g">(e.g. Hosp. No.: HN16123456(7), Input: HN121234567)</span>
            </label>
          </div>
        </Grid>

        <Grid container item xs={18} sy={{ mb: 0.5 }}>
          <Button size="small" onClick={handleRetrieveRequests} >
            Retrieve
          </Button>
          <Button size="small" onClick={handleDeleteUnlock} >
            Unlock
          </Button>
          <Button size="small" onClick={closeTab}>
            Close
          </Button>
        </Grid>
      </Grid>
  );
}

export default function RequestEnquiry(props) {
  const dispatch = useDispatch();
  const requests = useSelector((state) => state?.requests?.requests);
  const dispatchRetrieveRequests = React.useCallback((param) => {

    dispatch({
      type: requestsActionTypes.GET_REQUESTS,
      payload: param
    });
  }, [dispatch]);

  const dispatchDeleteUnlock = React.useCallback((param) => {
    console.log(`xxx(requests)7:${JSON.stringify(param)}`);
    dispatch({
      type: requestsActionTypes.DELETE_REQUESTS,
      payload: param
    });
  }, [dispatch]);

  const [selectionModel, setSelectionModel] = React.useState([]);
  const columns = [
    {
      field: 'Hospital Code',
      headerName: 'Hospital Code',
      description: 'Patient Case No',
      width: 150,
      editable: true,
      valueGetter: (params: GridValueGetterParams) =>
          `${params.row.patHospcode || ''}`,
    },
    {
      field: 'Hospital No./CaseNo',
      headerName: 'Hospital No./CaseNo',
      width: 150,
      editable: true,
      valueGetter: (params: GridValueGetterParams) =>
          `${params.row.caseNo || ''}`,
    },
    {
      field: 'Order No',
      headerName: 'Order No',
      width: 150,
      editable: true,
      valueGetter: (params: GridValueGetterParams) =>
          `${params.row.ordNo || ''}`,
    },
    {
      field: 'Locked By',
      headerName: 'Locked By',
      width: 150,
      editable: true,
      valueGetter: (params: GridValueGetterParams) =>
          `${params.row.fullname || ''}`,
    },
    {
      field: 'Function Name',
      headerName: 'Function Name',
      width: 150,
      editable: true,
      valueGetter: (params: GridValueGetterParams) =>
          `${params.row.fnName || ''}`,
    },
    {
      field: 'Work Station',
      headerName: 'Work Station',
      width: 150,
      editable: true,
      valueGetter: (params: GridValueGetterParams) =>
          `${params.row.wrkStnId || ''}`,
    },
    {
      field: 'create Date',
      headerName: 'create Date',
      width: 150,
      editable: true,
      valueGetter: (params: GridValueGetterParams) =>
          `${params.row.createDtm || ''}`,
    },
  ];

  const handleRetrieveRequests = (criteria) => {
    console.log(`xxx(requests)2:${JSON.stringify(criteria)}`);
    let param = {
      reqHospCode: criteria?.requestHospital,
      reqCaseNo: criteria?.requestCaseNo,
    };
    console.log(`xxx(requests)3:${JSON.stringify(param)}`);
    dispatchRetrieveRequests(param);
  };

  const handleDeleteRequests = (criteria) => {
    console.log(`xxx(requests)5:${JSON.stringify(criteria)}`);
    let param = {
      reqHospCode: criteria?.requestHospital,
      reqCaseNo: criteria?.requestCaseNo,
    };
    console.log(`xxx(requests)6:${JSON.stringify(param)}`);
    dispatchDeleteUnlock(param);
  };

  return (
      <StyledBox>

              <FilterPanel
                  selectionModel={selectionModel}
                  retrieveRequests={handleRetrieveRequests}
                  deleteRequests={handleDeleteRequests}
              />
              <DataGrid
                  rows={requests?.data||[]}
                  columns={columns}
                  getRowId={row => row.caseNo}
                  disableSelectionOnClick
                  onSelectionModelChange={(newSelectionModel) => {
                    setSelectionModel(newSelectionModel);
                    console.log(`xxx(newSelectionModel)1:${JSON.stringify(newSelectionModel)}`);
                  }}
                  selectionModel={selectionModel}
                  initialState={{
                    pinnedColumns: { left: ['__check__', 'investigationService'] },
                  }}
                  getRowClassName={(params) => `ipmoe-req-status--${params.row.requestStatus}`}
              />

      </StyledBox>
  );
};

