import React,{useState,useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import fire from "../../../config/firebase-config"
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate()
  const [user,setUser] = useState(false);


  const handleLogOut =()=>{
  fire.auth().signOut();
 }


  const authListener = ()=> {
    fire.auth().onAuthStateChanged(user => {
      if(user){
          setUser(true); 
      }else{
        navigate('/')
      }
    })
  }
  
  useEffect(()=>{
    authListener()
  },[])
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <AccountCircle/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Contacts Management Application
          </Typography>
          {user? <Button color="inherit" onClick={handleLogOut}>Logout</Button>:null}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
