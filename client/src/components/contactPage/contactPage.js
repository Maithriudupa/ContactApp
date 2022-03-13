import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Header from "../home/Header/Header";
import Footer from "../home/Footer/Footer";
import AddContact from "./addContact";
import ContactList from "./contactList.js";


const theme = createTheme();
export default function ContactPage() {
  
  
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Header/>
    <main>
        <AddContact/>
    </main>
    <ContactList/>
    <Footer/>
    </ThemeProvider>
    
  );
}
