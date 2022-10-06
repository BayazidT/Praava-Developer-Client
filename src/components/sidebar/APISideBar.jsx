import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import BiotechIcon from '@mui/icons-material/Biotech';
import { Link } from 'react-router-dom';




const APISideBar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
           <div className="logo">
           Praava
           </div>
        </div>
        <hr />
        <div className="center">
            <ul>
                <div className="title">Main</div>
                <Link className='link'  to='/'><li><DashboardIcon className='icon' />
                    <span>Dashboard</span></li></Link>
                    <Link className='link' to='/users'><li><LocalFloristIcon className='icon' /> <span>Praava Health</span></li></Link>
                    <Link className='link' to='/apis'><li><HealthAndSafetyIcon className='icon' /><span>APIs</span>
                    </li></Link>
                
                    <Link className='link' to='/apis'><li><span>Patient Portal V I</span>
                    </li></Link>
                    <Link to="#4">Test</Link>
                    
                    <Link className='link' to='/apis'><li><span>HIS Portal</span>
                    </li></Link>
                    <Link className='link' to='/apis'><li><span>HR Portal</span>
                    </li></Link>
                    <Link className='link' to='/apis'><li><span>Pharmacy Portal</span>
                    </li></Link>
                    
                <div className="title">
                    Others
                </div>
                <li><span>Settings</span></li>
                <li><span>Privacy</span></li>
                <li><span>Logs</span></li>
                <li><span>Logout</span></li>
            </ul>

        </div>
        
        <div className="bottom">
            
            <div className="colorOption"></div>
            <div className="colorOption"></div>
            <div className="colorOption"></div>

        </div>
        
        </div>
  )
}

export default APISideBar;