import {AppBar, Box, Container, IconButton, Toolbar, Typography, Button} from "@mui/material"
import LockIcon from '@mui/icons-material/Lock';
import { useValue } from "../context/ContextProvider";
import UserIcons from "./user/UserIcons";
import React from "react"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FitnessCenterRoundedIcon from '@mui/icons-material/FitnessCenterRounded';
import MenuIcon from '@mui/icons-material/Menu';


const pages = ['Products', 'Pricing', 'Blog'];

const NavBar = () => {

    const {state:{currentUser}, dispatch} = useValue()

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

    const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


    return (
        <AppBar >
        <Container maxWidth="lg">
        <Toolbar disableGutters>
          <FitnessCenterRoundedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            FITNESS TRACKER
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu} 
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <FitnessCenterRoundedIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            FITNESS APP
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          {!currentUser ? (<Button color='inherit' startIcon={<LockIcon />} onClick={() => dispatch({ type: 'OPEN_LOGIN' })}>
                        Login
                    </Button>) : (
                        <UserIcons />
                    )}


          
        </Toolbar>
      </Container>
    </AppBar>

       
    )
}

export default NavBar