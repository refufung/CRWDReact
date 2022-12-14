export const columnsOverviewMIT = [
  { field: 'id', headerName: 'ID', flex: 1 },
  {
    field: 'firstName',
    headerName: 'First name',
    flex: 1,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    flex: 1,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    flex: 1,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

export const rowsOverviewMIT = [  //[#//]mui.com/x/react-data-grid
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];
