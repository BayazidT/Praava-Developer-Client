import { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import './register.scss';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

 function Register() {
    const [err, setErr] = useState('');
    const [isValid, setIsValid] =useState(false);
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = data => {
     if (validate(data)) {
      registerUser(data);
     }

    };
    function validate(form){
      if(form.password !== form.confirmPassword){
        setErr("Confirm password does not matched!");
        setIsValid(false);
        console.log(err)
        return false;
      }else{
        setIsValid(true);
        return true; 
      }
    }
    function  registerUser(dataToStore) {
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(dataToStore)
      };
      APICall(requestOptions);
  }
  async function APICall(request){
    try {
      await fetch(`http://127.0.0.1:5000/auth/register`, request)
      .then(res => {
        res.json().then((data) => {console.log(data.token)});
 });
    //navigate('/');
    } catch (error) {
      setErr('Something went wrong');
    }
  }
    return (
        <div className="container">
              <Card className="div-center mt-5" sx={{ maxWidth: 520 }}>

              <CardContent className="div-center" >
                <Typography className="header-text" variant="h4"> Register </Typography>
            <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
      <div>
      <TextField id="outlined-basic" label="Full Name" variant="outlined" {...register("name", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })} />
        {/* <input {...register("name", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })} /> */}
        {/* {errors.firstName?.type === 'required' && <p role="alert">First name is required</p>} */}

        <TextField
          id="outlined-basic" label="HIS Username" variant="outlined" {...register("hisUser", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })}
        />
      </div>
      <div>
      <TextField id="outlined-basic" label="UPI" variant="outlined" {...register("upi", { required: true, pattern: /^[A-Za-z]+$/i })} />
        {/* <input {...register("name", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })} /> */}
        {/* */}

        <TextField
          id="outlined-basic" label="Designation" variant="outlined" {...register("designation", { required: true, pattern: /^[A-Za-z]+$/i })}
        />
      </div>
      <TextField
           type="email" label="Email" variant="outlined" {...register("email", )}
        />
       <div>
      <TextField  type="password" label="Password" variant="outlined" {...register("password", { min: 8, max: 20 })} />


        <TextField
          type="password" label="Confirm Password" variant="outlined" {...register("confirmPassword", { min: 8, max: 20 })}
        />
      </div>
      <CardActions>
      <Button type="submit" variant="outlined">Register</Button>
      </CardActions>
      </Box >
      </CardContent>
      </Card>
        </div>
    );
  }
export default Register;

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
