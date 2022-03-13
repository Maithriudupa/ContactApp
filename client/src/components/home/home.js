
import React,{useState,useEffect} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';

import Header from "./Header/Header"
import Main from "./Main/Main"
import Footer from "./Footer/Footer"
import { useNavigate } from 'react-router-dom';


import fire from "../../config/firebase-config" ;



const theme = createTheme();

export default function Home() {
  const [user,setUser] = useState('');
  const navigate = useNavigate()
  const authListener = ()=> {
    fire.auth().onAuthStateChanged(user => {
      if(user){
          setUser(user);
          console.log(user);
          navigate('/ContactPage')    
      }else{
        setUser('');
      }
    })
  }
  
  useEffect(()=>{
    authListener()
  },[])
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header/>
      <main>
       <Main/>
      </main>
      <Toolbar></Toolbar>
     
      <Footer/>
     
    </ThemeProvider>
  );
}