import { ApiOutlined, BalanceOutlined, GradeOutlined, KeyboardArrowUpOutlined, MoneyOutlined, PersonOutline } from '@mui/icons-material';
import React from 'react'
import './widget.scss';
import {Link} from 'react-router-dom'

const Widget = ({ type }) => {
    let data;
    switch(type){
        case "user":
            data={
                title:"USERS",
                isMoney: false,
                count:17,
                link: "See all users",
                url:"/users",
                icon: <PersonOutline className='icon' style={{ backgroundColor:'#e2616133', color:'crimson'}}/>,
            };
            break;
        case "api":
            data={
                title:"APIs",
                isMoney: false,
                count:21,
                link: "See all APIs",
                url:"/apis",
                icon: <ApiOutlined className='icon' />
            };
            break;
         case "earning":
            data={
                title:"TOTAL VISITORS",
                isMoney: false,
                count:4765,
                link: "See all visitors",
                url:"/users",
                icon: <GradeOutlined className='icon' style={{ backgroundColor:'#f57e3833', color:'orange'}}/>,
            };
            break;
        case "balance":
            data={
                title:"BALANCE",
                isMoney: true,
                count:765765,
                link: "See all balance",
                url:"/users",
                icon: <BalanceOutlined className='icon' style={{ backgroundColor:'rgba(0, 128,0,0.2)', color:'green'}}/>
            }

            default:
                break;
    }
  return (
    <div className='widget'>
        <div className="left">
            <span className="title">
                {data.title}
            </span>
            <span className="counter">
                {data.count}{data.isMoney && ' $'}
               {/* {data.isMoney ? (100 +"$"): 76}  */}
            </span>
           <Link style={{textDecoration:'none'}} to={data.url}> <span className="link">{data.link}</span></Link>

        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpOutlined />
                00%
            </div>
           {data.icon}

        </div>
    </div>
  )
}

export default Widget