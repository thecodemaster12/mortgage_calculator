import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';


const Navbar = () => {
    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                <Toolbar variant="dense">
                    <Typography variant="h5" color="inherit" component="div">
                    Mortgage Calculator
                    </Typography>
                </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}

export default Navbar