import './featured.scss';
import MorevertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'
import { KeyboardArrowDownOutlined, KeyboardArrowUpOutlined } from '@mui/icons-material';

const Featured = () => {
  return (
    <div className='featured'>
            <div className="top">
                <h1 className='title'>Total Revenue</h1>
                <MorevertIcon fontSize='small' />
            </div>
            <div className="bottom">
                    <div className="featuredChart">
                    <CircularProgressbar value={70} text={'70%'} strokeWidth={8} />
                    </div>
                    <p className="title">Total money earned today</p>
                    <p className="amount">$ 674 </p>
                    <p className="des">Last few minutes data may not be updated</p>
                    <div className="summary">
                      <div className="item">
                        <div className="itemTitle">
                           Target
                        </div>
                        <div className="itemResult positive">
                          <KeyboardArrowUpOutlined fontSize='small' />
                          <div className="resultAmount">$ 148.14k</div>
                        </div>
                      </div>
                      {/* Microcomponent will build later */}
                      <div className="item">
                        <div className="itemTitle">
                           Last Week
                        </div>
                        <div className="itemResult positive">
                          <KeyboardArrowUpOutlined fontSize='small' />
                          <div className="resultAmount">$ 114.8k</div>
                        </div>
                      </div>
                       {/* Microcomponent will build later */}
                       <div className="item">
                        <div className="itemTitle">
                           This Week
                        </div>
                        <div className="itemResult negative">
                          <KeyboardArrowDownOutlined fontSize='small' />
                          <div className="resultAmount">$ -1.4k</div>
                        </div>
                      </div>
                    </div>
            </div>
        </div>
  )
}

export default Featured