import React,{useState,useEffect} from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import GetIn from "../../log/GetIn"

export default function MenuAppBar() {

    const [open, setOpen] = React.useState(false);
    const [openNew, setOpenNew] = React.useState(false);
   
    const handleClickOpen = () => {
        setOpen(true);
      };
    
    const handleClose = () => {
        setOpen(false);
      };
     
    const handleClickOpenNew = () => {
          setOpenNew(true);
        };
      
    const handleCloseNew = () => {
          setOpenNew(false);
        };
    return (
                <Box
                sx={{
                  bgcolor: 'background.paper',
                  pt: 8,
                  pb: 6,
                }} >
                <Container maxWidth="sm">
                  <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom>
                    Contacts App
                  </Typography>
                  <Typography variant="h5" align="center" color="text.secondary" paragraph>
                  Contact management software typically allows you to make entries for each of your contacts. 
                  This can include contact information such as a name, phone number, email address, or company.
                  </Typography>
                  <Stack
                    sx={{ pt: 4 }}
                    direction="row"
                    spacing={2}
                    justifyContent="center">
                    <Button variant="contained" onClick={handleClickOpen}>Get start</Button>
                    <Dialog open={open} onClose={handleClose}>
                        <GetIn logDetail= "Sign In"/>
                        </Dialog>
                        <Button variant="outlined"  onClick={handleClickOpenNew}>Registraion</Button>
                    <Dialog open={openNew} onClose={handleCloseNew}>
                        <GetIn logDetail = "Sign Up"/>
                    </Dialog>
                  </Stack>
                </Container>
                </Box>
)}