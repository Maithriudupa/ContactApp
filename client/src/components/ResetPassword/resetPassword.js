import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Header from "../home/Header/Header"
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const theme = createTheme();

export default function SignIn(props) {
   const {logDetail} = props;
    
   
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
       
      
        <CssBaseline />
        <Header/>
        <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
           Reset Password
          </Typography>

          
                         
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        
          <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
           <TextField
              margin="normal"
              required
              fullWidth
              name="New password"
              label="New password"
              type="password"
              id="New password"
              autoComplete="New-password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="Confirm password"
              label="Confirm Password"
              type="password"
              id="Confirm password"
              autoComplete="Confirm password"
            />
           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Reset Password
            </Button>
            
          </Box>
        </Box>
       
        </Container>
    
    </ThemeProvider>
  );
}