import * as React from 'react';
import "./App.css"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function HelperTextAligned() {
  return (
  <div className='logindesign'>
    <div className='backcolor'>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgYJO6JuvuYEk7SfsJNn-VRWoD72fGY35rzg&usqp=CAU" className='img' alt="" />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
      }}
    >
      <TextField
        id="demo-helper-text-aligned"
        label="Email"
        className='inpstyle'
/>
    </Box>
    <br />
    <br />
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
      }}
    >
      <TextField
        id="demo-helper-text-aligned"
        label="password"
className='inpstyle'
  />
    </Box>
  
    </div>
    <div>
    <Button href="/dashboard" className='logindesign2' variant="outlined" width={300} color="warning">Login</Button>
    </div>
    </div>
  );
}
