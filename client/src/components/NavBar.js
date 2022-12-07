import React from 'react';
import {AppBar, Box, Container, IconButton, Toolbar, Typography, Button} from "@mui/material"
import {Menu} from "@mui/icons-material"
import LockIcon from '@mui/icons-material/Lock';
import { useValue } from "../context/ContextProvider";
import UserIcons from "./user/UserIcons";



const NavBar = () => {

    const {state:{currentUser}, dispatch} = useValue()


    return (
        <>
         <AppBar>
            <Container maxWidth='lg'>
                <Toolbar disableGutters>
                    <Box sx={{mr:1}}>
                        <IconButton size='large' color='inherit'>
                            <Menu />
                        </IconButton>
                    </Box>
                    <Typography
                    variant='h6'
                    component='h1'
                    noWrap
                    sx={{flexGrow:1, display:{xs:'none', md:'flex'}}}
                    >
                        Fitness Tracker
                    </Typography>
                    <Typography
                    variant='h6'
                    component='h1'
                    noWrap
                    sx={{flexGrow:1, display:{ xs: 'flex', md: 'none'}}}
                    >
                        Fitness Tracker
                    </Typography>
                    {!currentUser ? (<Button color='inherit' startIcon={<LockIcon />} onClick={() => dispatch({ type: 'OPEN_LOGIN' })}>
                        Login
                    </Button>) : (
                        <UserIcons />
                    )}
                    
                </Toolbar>
            </Container>
        </AppBar>
        <Toolbar/>
        </>
       
    )
}

export default NavBar