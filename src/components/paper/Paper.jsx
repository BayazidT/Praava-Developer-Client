import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import './paper.scss'

     function DashboardPaper() {
    return (
            <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                m: 1,
                width: 240,
                height: 120,
                },
            }}
            >
            <Paper className='paper' elevation={2} >
                <div className='paper-content'>
                    456

                </div>
                <div className='paper-footer'>
                    Developers
                </div>
            </Paper>
            <Paper className='paper' elevation={2} >
                <div className='paper-content'>
                    46

                </div>
                <div className='paper-footer'>
                    API
                </div>
            </Paper>
            <Paper className='paper' elevation={2} >
                <div className='paper-content'>
                    456

                </div>
                <div className='paper-footer'>
                    Developers
                </div>
            </Paper>
            <Paper className='paper' elevation={2} >
                <div className='paper-content'>
                    6

                </div>
                <div className='paper-footer'>
                    Total Projects
                </div>
            </Paper>

            </Box>
  );
}
export default DashboardPaper;