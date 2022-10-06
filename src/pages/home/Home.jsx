import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import './home.scss';
import DashboardPaper from '../../components/paper/Paper';
import DataTable from '../../components/table/Table';
import Widget from '../../components/widget/Widget';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/charts/Chart';
import { ChatRounded } from '@mui/icons-material';
import {Link} from 'react-router-dom';

const columnsAPI = [
  {
    field: 'id', headerName:'ID', width: 80
  },
  {
    field: 'api', headerName:'API', width: 180
  },
  {
    field: 'service', headerName:'Service', width: 180
  },
  {
    field: 'access', headerName:'Access Allowed', width: 180
  },
  {
    field: 'action', 
    headerName:'Action',
    width: 150,
    renderCell: (params) => (
      <>
      <Link className='link' to={`user/${params.id}`}>View</Link>
      <Link className='link' to={`del/${params.id}`}>Delete</Link>
      </>
    )
  },
  {
    field: 'function', 
    headerName:'Function', 
    width: 150,
    renderCell: (params) => (
      <Link className='link' to={`/${params.id}`}>Enabled</Link>
    )
  },

];

const rowsAPI = [
  {id: 1, api:'Patient Portal', service:'Customer Support', access:'Admin, Developer', action:'', status:'Enabled'},
  {id: 2, api:'Pharmacy Portal', service:'Customer Support', access:'Admin, Developer', action:'', status:'Enabled'},
  {id: 3, api:'HIS Portal', service:'Managment Support', access:'Admin, Developer', action:'', status:'Enabled'},
  {id: 4, api:'HR Portal', service:'Managment Support', access:'Admin, Developer', action:'', status:''},
]

const columns = [
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'firstName', headerName: 'First name', width: 120 },
  { field: 'lastName', headerName: 'Last name', width: 120 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 100,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 200,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'action',
    headerName: 'Action',
    type: 'text',
    width: 120,
    renderCell: (params) => (
      <Link className='link' to={`user/${params.id}`}>Details</Link>
    )
  },
  {
    field: 'delete',
    headerName: 'Delete',
    type: 'text',
    width: 120,
    renderCell: (params) => (
      <Link className='link' to={`/${params.id}`}>Delete</Link>
    )
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, action:'', delete: ''},
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, action: 'Edit', delete: 'delete' },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, action: 'Edit', delete: 'Delete' },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, action: 'Edit', delete: 'Delete' },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, action: 'Edit', delete: 'Delete' },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150, action: 'Edit', delete: 'Delete' },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, action: 'Edit', delete: 'Delete' },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, action: 'Edit', delete: 'Delete' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, action: 'Edit', delete: 'Delete' },
  { id: 10, lastName: 'Snow', firstName: 'Jon', age: 35 , action: 'Edit', delete: 'Delete'},
  { id: 12, lastName: 'Lannister', firstName: 'Cersei', age: 42, action: 'Edit', delete: 'delete' },
  { id: 13, lastName: 'Lannister', firstName: 'Jaime', age: 45, action: 'Edit', delete: 'Delete' },
  { id: 14, lastName: 'Stark', firstName: 'Arya', age: 16, action: 'Edit', delete: 'Delete' },
  { id: 15, lastName: 'Targaryen', firstName: 'Daenerys', age: null, action: 'Edit', delete: 'Delete' },
  { id: 16, lastName: 'Melisandre', firstName: null, age: 150, action: 'Edit', delete: 'Delete' },
  { id: 17, lastName: 'Clifford', firstName: 'Ferrara', age: 44, action: 'Edit', delete: 'Delete' },
  { id: 18, lastName: 'Frances', firstName: 'Rossini', age: 36, action: 'Edit', delete: 'Delete' },
  { id: 19, lastName: 'Roxie', firstName: 'Harvey', age: 65, action: 'Edit', delete: 'Delete' },
];

const Home = () => {
  return (
    <div className='home'>
       <Sidebar />
       <div className="homeContainer">
        <Navbar/>
        <div className="homeContent">
          <div className="widgets">
            
          <Widget type="user"/>
          <Widget type="api"/>
          <Widget type="earning"/>
          <Widget type="balance"/>
          </div>
          {/* <div className="charts">
            <Featured />
            <Chart />
          </div> */}

           <div className="listContainer">
            <div className="listTitle">
              Latest API List
            </div>
            <DataTable rows={rowsAPI} columns={columnsAPI}/> 
        </div>
       
        <div className="listContainer">
          <div className="listTitle">
            Latest Users List
          </div>
          <DataTable rows={rows} columns={columns}/> 
        </div>
       
        </div>
      
       </div>
        </div>
  )
}

export default Home