import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import theme from '../../src/theme'
import Link from 'next/link'
import LoginButton from './loginButton'
import Logo from '../../public/Logo.png'
import Image from 'next/image'

interface Props {
    window?: () => Window;
}

const navItems = ['Home', 'Health Insurance', 'About Us', 'FAQs'];

export default function ButtonAppBar(props: Props) {
    const { window } = props;
    const [menuOpen, setMenuOpen] = React.useState(false);

    const handleMenuToggle = () => {
        setMenuOpen((prevState) => !prevState);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Box sx={{ flexGrow: 1}} >
                    <Image 
                    alt='logo' 
                    src={Logo} 
                    className='logo'/>
                    </Box>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleMenuToggle}
                    >
                        {menuOpen ? (
                            <CloseIcon color='inherit' style={{ zIndex: 1000 }} />
                        ) : (
                            <MenuIcon />
                        )}
                    </IconButton>
                </Toolbar>
                {menuOpen && (
                    <>
                        <Box sx={{}} style={{ left: 0, right: 0, bottom: 0, top: 5, background: theme.palette.primary.main, zIndex: 999 }}>
                            <Box sx={{ pl: 2 }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', height: '100vh' }}>
                                {navItems.map((item, index) => (
                                    <Link href='#' key={index} color="inherit" onClick={handleMenuToggle} style={{ paddingBottom: 20, paddingTop: 20 }}>
                                        {item}
                                    </Link>

                                ))}
                                <LoginButton />
                            </Box>
                        </Box>
                    </>
                )}
            </AppBar>
        </Box>
    );
}