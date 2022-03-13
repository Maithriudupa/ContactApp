import React,{useState,useEffect} from 'react';
//Style components
import { createTheme, ThemeProvider } from '@mui/material/styles';


import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import { 
        Typography,
        Box,
        CssBaseline,
        TextField,
        Grid,
        Button,
        Stack
       } from '@mui/material';

import MuiPhoneNumber from 'material-ui-phone-number';
import axios from 'axios';
//Import files
import fire from "../../config/firebase-config" ;


const theme = createTheme();


export default function StateTextFields() {
const [name, setName] = React.useState('');
const [phone, setPhone] = React.useState("");
const [email,setEmail] = React.useState('');
const [user,setUser] = useState('');

//Login Session check
const authListener = ()=> {
  fire.auth().onAuthStateChanged(user => {
    if(user){
        setUser(user.uid);   
    }else{
      setUser('');
    }
  })
}

useEffect(()=>{
  authListener()
},[])


const handleSubmit = (e) => {
  e.preventDefault();

  axios.post("https://contact-app-zoho.herokuapp.com/contact",{
    contactName :name,
    contactNumber:phone,
    contactEmail: email,
    Unique_id: user
  }).then((response)=> {
  alert(response.data)
  window.location.reload(false)
  setName("")
  setPhone()
  setEmail("")
});   
}

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 4,
          pb: 6,
            }}>
          <Stack  direction="row"
                  sx={{pb:4}}
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}>

                <LocalPhoneIcon fontSize="large" color="primary"/>
                <Typography align="Center" variant="h4" > My Contacts</Typography>
          </Stack>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
                   >
     
            <form onSubmit={handleSubmit}>
                <TextField  margin="normal"
                required
                focused
                type = "text"
                id="name"
                value={name}
                label="Full Name"
                name="name"
                autoComplete="name"
                onChange={(e)=>{ setName(e.target.value)}}
                autoFocus style={{padding: "10px 10px"}}/>

                <MuiPhoneNumber
                variant="outlined"
                required
                focused
                autoFocus
                style={{padding: "10px 10px",marginTop: "17px"}}
                name="phone"
                label="Phone Number"
                data-cy="user-phone"
                defaultCountry={"in"}
                type= "tel"
                value={phone}
                onChange={(value) => setPhone(value)}
                />
                <TextField  margin="normal"
                  required
                  focused
                  type="email"
                  id="email"
                  value={email}
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e)=>{ setEmail(e.target.value)}}
                  autoFocus style={{padding: "10px 10px"}}/>
                <Button variant="contained"   type="submit" style={{marginTop: "35px", marginLeft: "10px"}}>
                  Save
                </Button>
             </form>
            </Grid>
         </Box>
     </ThemeProvider>
  );
}
