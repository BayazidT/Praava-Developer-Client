import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import './navbar.scss';
import avatar from '../../media/avatar.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';




const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);


  const handleDropDown = () =>{
    setDropDown((preDropDown) => !preDropDown);
  }
  return (
    <div className='navbar'>
    <div className="wrapper">
      <div className="search">
        <input type="text" placeholder='Search...'/>
        <SearchIcon />
      </div>
      <div className="items">
        <div className="item"><EmailIcon className='navicon' />
        <p className="counter">6</p>
        </div>
        <div className="item"><NotificationsIcon className='navicon' />
        <p className="counter">2</p>
        </div>
        <div className="item" ><ArrowDropDownIcon onClick={handleDropDown} className='navicon' />
        { dropDown && (
          <div className="nav-dropdown" id="drop-down">
            <ul>
              <li><PersonIcon /><span>Profile</span></li>
              <li><SettingsIcon /><span>Settings</span></li>
              <Link style={{textDecoration:'none'}} to='/login'><li><LogoutIcon /><span>Logout</span></li></Link>
            </ul>

          </div>
        )}
        </div>
        <div className="item"><img className="avatar" src={avatar} alt="" /></div>
      </div>
    </div>
    </div>
  )
}

export default Navbar