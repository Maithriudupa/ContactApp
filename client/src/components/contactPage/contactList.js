import React,{useState,useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import axios from 'axios';
//Imort file
import fire from "../../config/firebase-config" ;




function randomColor() {
  let hex = Math.floor(Math.random() * 0xFFFFFF);
  let color = "#" + hex.toString(16);
  return color;
}



export default function BasicTable() {
const [obj, setObj] = useState([])
const [user,setUser] = useState('');


const authListener = ()=> {
  fire.auth().onAuthStateChanged(user => {
    if(user){
        setUser(user.uid);
        console.log(user.uid);
         
    }
  })
}

const fetchData = async () => {
	const res = await axios.get(`http://localhost:8080/contacts/${user}`);
	console.log(res.data);
  setObj(res.data)
	};
  
  
useEffect(() => {
    authListener()
		fetchData()
	}, [user]);
  
  
return (
    <Box
       sx={{
          bgcolor: 'background.paper',
          pt: 3,
          pb: 6,
          pl:20,
          pr:20,
        }}>
            <Typography sx={{ mb: 4 }}>{obj.length < 2 ?`Contact(${obj.length})`:`Contacts(${obj.length})`}</Typography>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell   align="left" >Full Name</TableCell>
                        <TableCell align="center"  >Contact Number</TableCell>
                        <TableCell align="center"  >Email Address</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                          {obj.map((obj) => (
                            <TableRow
                              key={obj.contactName}
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

                              <TableCell   style={{borderBottom:"none"}} component="th" scope="row">
                                <Stack  direction="row"
                                  justifyContent="left"
                                  alignItems="center"
                                  spacing={2}>
                                    <Avatar sx={{ bgcolor: randomColor() }}>{obj.contactName && obj.contactName.charAt(0).toUpperCase()}</Avatar> 
                                    <Typography>{obj.contactName}</Typography>
                                </Stack>
              
                             </TableCell>
                              <TableCell  style={{borderBottom:"none"}} align="center">{obj.contactNumber}</TableCell>
                              <TableCell  style={{borderBottom:"none"}} align="center"> {obj.contactEmail} </TableCell>
                          </TableRow>
                           ))}
                        </TableBody>
                      </Table>
                   </TableContainer>
                 </Box>
             );
            }
