import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import  { useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://images.app.goo.gl/dPPQCgKeLKucQVGV7">
        Rekor India Pvt. Ltd.
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  // eslint-disable-next-line no-unused-vars
  const [r, setR] = useState('resp');
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email_v = data.get('email')
    const password_v = data.get('password')
    const isEmailValid = /@/.test(email_v);

    if(!isEmailValid){
      setEmailError("Invalid Email")
    }
    
    if (password_v.length<8) {
      setPasswordError('Password must be at least 8 character long');
    }

    signin(email_v,password_v)
  };

  const signin = async(email_v,password_v,props) => {
  const pswd = {email_v}
  const loginid = {password_v}
  const options = {
    url: `http://localhost:8000/login`,
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
  }
   
    await axios.post(`http://localhost:8000/login`, {"id": loginid,"password": pswd},
    options)
    .then((response) => {
      console.log('response ->',response);
      if(response){
        window.localStorage.setItem('authTokenRekor', response);
      }
      /*if (response.data[0].roles === "student") {
        toast.success('Hello Student, You logged in successfully',
        {position: toast.POSITION.BOTTOM_RIGHT})
        setR(response.data[0].roles)
        history.push('/student')
      }
      if (response.data[0].roles === "teacher"){
        toast.success('Hello Teacher, You logged in successfully',
        {position: toast.POSITION.BOTTOM_RIGHT})
        setR(response.data[0].roles)
        history.push('/teacher')
      }*/ 
    }).catch((error) => {
      console.log(error);
      toast.error('Wrong Credentials OR Roles are not Defined',
      {position: toast.POSITION.BOTTOM_RIGHT})      
    });
  };


  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              marginLeft: '190px',
              marginRight: '121px',
              marginTop: '207px'
            }}
          >
            <Typography component="h1" style={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: '50px', lineHeight: '59px', color: '#000000' }}>
              Sign In
            </Typography>
            <br/>
            <br/>
            <Box component="form" validate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Login Id"
                name="email"
                autoComplete="email"
                autoFocus
                variant="standard"
              />
              <span style={{color:"red"}}>{emailError}</span>
              <br/>
              <br/>
              <br/>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                variant="standard"
              />
              <span style={{color:"red"}}>{passwordError}</span>
              <br/>
              <br/>
              <Grid container>
                <Grid item xs>
                  <Link style={{ color: '#102371', lineHeight: '24px', fontSize: '18px', fontWeight: 'normal', fontStyle: 'normal', textDecoration: 'none', float: 'right' }} href="/forgot">
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
              <br/>
              <br/>
              <br/>
              <FormControlLabel style={{ color: '#000000', lineHeight: '24px', fontSize: '20px', fontWeight: 'normal', fontStyle: 'normal' }}
                control={<Checkbox value="remember" color="primary" />}
                label="Keep me signed in"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{ borderRadius: '69px', borderShadow: '0px 4px 14px 1px #949AFF', backgroundColor: '#3742FA', height: '108px', fontSize: '25px', color: '#FFFFFF', lineHeight: '30px', fontWeight: '600', fontStyle: 'normal' }}
              >
                Sign In
              </Button>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}