import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './table.scss';

// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'firstName', headerName: 'First name', width: 150 },
//   { field: 'lastName', headerName: 'Last name', width: 150 },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 120,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
//   {
//     field: 'action',
//     headerName: 'Action',
//     type: 'text',
//     width: 120,
//   },
//   {
//     field: 'delete',
//     headerName: 'Delete',
//     type: 'text',
//     width: 120,
//   },
// ];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 , action: 'Edit', delete: 'Delete'},
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, action: 'Edit', delete: 'delete' },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, action: 'Edit', delete: 'Delete' },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, action: 'Edit', delete: 'Delete' },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, action: 'Edit', delete: 'Delete' },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150, action: 'Edit', delete: 'Delete' },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, action: 'Edit', delete: 'Delete' },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, action: 'Edit', delete: 'Delete' },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, action: 'Edit', delete: 'Delete' },
//   { id: 10, lastName: 'Snow', firstName: 'Jon', age: 35 , action: 'Edit', delete: 'Delete'},
//   { id: 12, lastName: 'Lannister', firstName: 'Cersei', age: 42, action: 'Edit', delete: 'delete' },
//   { id: 13, lastName: 'Lannister', firstName: 'Jaime', age: 45, action: 'Edit', delete: 'Delete' },
//   { id: 14, lastName: 'Stark', firstName: 'Arya', age: 16, action: 'Edit', delete: 'Delete' },
//   { id: 15, lastName: 'Targaryen', firstName: 'Daenerys', age: null, action: 'Edit', delete: 'Delete' },
//   { id: 16, lastName: 'Melisandre', firstName: null, age: 150, action: 'Edit', delete: 'Delete' },
//   { id: 17, lastName: 'Clifford', firstName: 'Ferrara', age: 44, action: 'Edit', delete: 'Delete' },
//   { id: 18, lastName: 'Frances', firstName: 'Rossini', age: 36, action: 'Edit', delete: 'Delete' },
//   { id: 19, lastName: 'Roxie', firstName: 'Harvey', age: 65, action: 'Edit', delete: 'Delete' },
// ];
const actionColumn = [
    {
        field: 'view',
        headerName: 'View',
        width:80,
        renderCell:() =>{
            return(
                <div className="cellView">
                    <div className="viewButton">View</div>
                    <div className="deleteButton">Delete</div>
                </div>
            )
        }
    }
]

     function DataTable(props) {
            return (
                <div className='datatable'>
                <DataGrid
                    rows={props.rows}
                    columns={props.columns}
                    pageSize={15}
                    rowsPerPageOptions={[15]}
                />
                </div>
            );
}
export default DataTable;