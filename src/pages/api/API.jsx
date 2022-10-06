import './api.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';


import {Link} from 'react-router-dom';
import Content from './Content';
import APISideBar from '../../components/sidebar/APISideBar';


const API = () => {
  return (
    <div className='api'>
       <Sidebar/>
       <div className="apiContainer">
        <Navbar/>
        <div className="apiContent">
         <Content />
        </div>
      
       </div>
        </div>
  )
}

export default API