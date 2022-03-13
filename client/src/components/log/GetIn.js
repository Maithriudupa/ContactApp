import React,{useState,useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';



import fire from "../../config/firebase-config"

const theme = createTheme();

export default function SignIn(props) {
   const {logDetail} = props;
   const navigate = useNavigate()

   const [logInfo,setLogInfo] = useState(logDetail);

   const [user,setUser] = useState('');
   
   const [email,setEmail] = useState('');
  
   const [password,setPassword] = useState('');

   const authListener = ()=> {
      fire.auth().onAuthStateChanged(user => {
        if(user){
            setUser(user.email);
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
   
   const handleSignIn = () => {
     
    fire
    .auth().setPersistence(`local`).then(()=>{
     return fire
      .auth()
      .signInWithEmailAndPassword(email,password)
    })
    .catch( (err)=> {
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          alert(err.message)
          break;
        case "auth/wrong-password":
          alert(err.message)
          break;
      }
    })
   
   }

   const handleSignUp = () => {
    fire
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .catch( (err)=> {
      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          alert(err.message)
          break;
        case "auth/weak-password":
          alert(err.message)
          break;
      }
    })

   }
   
  const handleSubmit = (e) => {
    e.preventDefault();
    if(logInfo==="Sign In"){
     handleSignIn()
    }else{
      handleSignUp()
    }
    
  };



  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
          {logInfo}
         </Typography>

          {logInfo==="Sign In" ? 
            <Grid item>
             <Link component="button"
              variant="body2"
              onClick={() => {
                setLogInfo("Sign Up")
              }} >
              {"Don't have an account? Sign Up"}
              </Link>
              </Grid>
              :
              <Grid item>
              <Link component="button"
              variant="body2"
              onClick={() => {
                setLogInfo("Sign In")
              }}>
            {"Do you have alraedy an account? Sign In"}
             </Link>
            </Grid> 
              }
                
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              value={email}
              label="Email Address"
              name="email"
              type="email"
              autoFocus
              onChange={(e)=>{ setEmail(e.target.value)}}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              value={password}
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={(e)=>{ setPassword(e.target.value)}}
            />
           <Grid container justifyContent="flex-end" style={{padding: "10px 10px"}}>
              {logInfo==="Sign In" ? <Link  variant="body2">Forgot password? </Link> : null}
           </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }} >
             {logInfo==="Sign In" ?  "Sign In" :"Sign Up"}
            </Button>
            {logInfo==="Sign In" ? null:<Typography component="div" style={{padding: "10px 10px"}}><Box sx={{ fontWeight: 'light' , fontSize: 12, textAlign:"center"}}>By clicking Sign Up button, 
            you are creating an account, and you agree to the Terms of use </Box></Typography>}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
