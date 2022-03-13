import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';


function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        
          {' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

export default function Footer() {
    return (
<Box sx={{ bgcolor: '#e8eaf6', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Contact Us
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Do you have query?
        </Typography>
        <Stack direction="row" alignItems="center" spacing={1} justifyContent="center">
        <Link href="https://github.com/Maithriudupa">
        <IconButton aria-label="Github" size="large">
        <GitHubIcon/>
        </IconButton>
        </Link>
        <Link href="mailto:udupamaithri@gmail.com">
        <IconButton aria-label="Email" size="large">
        <EmailIcon/>
        </IconButton>
        </Link>
        <Link href="https://www.linkedin.com/in/maithri-udupa-9b29a41ba/">
       
        <IconButton aria-label="linkedIn" size="large">
        <LinkedInIcon/>
        </IconButton>
        </Link>
        </Stack>
        <Copyright />
      </Box>
    )}