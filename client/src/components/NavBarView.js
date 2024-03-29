import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import logo from '../images/yummy.png'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function NavBarView() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <AppBar position="fixed" sx={{ backgroundColor: 'white', }}>
                <Container maxWidth="100%" >
                    <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box sx={{ height: '42px', display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none' }}>
                            <a href='/'>
                                <img
                                    src={logo}
                                    width='70px'
                                    height='auto'
                                />
                            </a>
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="/"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'contents' },
                                    flexGrow: 1,
                                    fontFamily: 'Protest Guerrilla, sans-serif',
                                    fontWeight: 700,
                                    fontSize: '25px',
                                    letterSpacing: '.1rem',
                                    color: 'black',
                                    textDecoration: 'none',
                                    textTransform: 'uppercase',
                                    marginLeft: '5px',

                                }}
                            >
                                yummydish
                            </Typography>
                        </Box>

                        <Box sx={{ flexGrow: 0, }}>
                            <Tooltip title="Wishlist">
                                <IconButton /* onClick={handleOpenUserMenu}  */ sx={{ p: 1 }}>
                                    <FavoriteBorderIcon sx={{ color: 'black' }} />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Cart">
                                <IconButton /* onClick={handleOpenUserMenu}  */ sx={{ p: 1 }}>
                                    <ShoppingCartIcon sx={{ color: 'black' }} />
                                </IconButton>
                            </Tooltip>
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar >
        </>
    )
}

export default NavBarView