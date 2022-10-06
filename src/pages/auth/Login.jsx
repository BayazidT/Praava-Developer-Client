import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import './login.scss';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

 function Login() {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="container">
              <Card className="div-center mt-5" sx={{ maxWidth: 520 }}>

              <CardContent className="div-center" >
                <Typography className="header-text" variant="h4"> Login </Typography>
            <Box
                    component="form"
                    sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit(onSubmit)}
      >
         <Grid item md={12}>
         <TextField  md={12} fullWidth label="Email" variant="outlined" {...register("email", { required: true, pattern: /^[A-Za-z]+$/i })}
        />
         </Grid>
         <Grid item md={12}>
         <TextField md={12} id="outlined-basic" fullWidth label="Password" variant="outlined" {...register("password", { min: 8, max: 20 })} />
         </Grid>
      <CardActions>
      <Button type="submit" variant="outlined">Login</Button>
      </CardActions>
      </Box >
      </CardContent>
      </Card>
        </div>
    );
  }
export default Login;

// <TextField id="outlined-basic" label="Outlined" variant="outlined" />
// <TextField id="filled-basic" label="Filled" variant="filled" />
// <TextField id="standard-basic" label="Standard" variant="standard" />

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

// export default function ValidationTextFields() {
//   return (
    // <Box
    //   component="form"
    //   sx={{
    //     '& .MuiTextField-root': { m: 1, width: '25ch' },
    //   }}
    //   noValidate
    //   autoComplete="off"
    // >
//       <div>
//         <TextField
//           error
//           id="outlined-error"
//           label="Error"
//           defaultValue="Hello World"
//         />
//         <TextField
//           error
//           id="outlined-error-helper-text"
//           label="Error"
//           defaultValue="Hello World"
//           helperText="Incorrect entry."
//         />
//       </div>
//       <div>
//         <TextField
//           error
//           id="filled-error"
//           label="Error"
//           defaultValue="Hello World"
//           variant="filled"
//         />
//         <TextField
//           error
//           id="filled-error-helper-text"
//           label="Error"
//           defaultValue="Hello World"
//           helperText="Incorrect entry."
//           variant="filled"
//         />
//       </div>
//       <div>
//         <TextField
//           error
//           id="standard-error"
//           label="Error"
//           defaultValue="Hello World"
//           variant="standard"
//         />
//         <TextField
//           error
//           id="standard-error-helper-text"
//           label="Error"
//           defaultValue="Hello World"
//           helperText="Incorrect entry."
//           variant="standard"
//         />
//       </div>
//     </Box>
//   );
// }
