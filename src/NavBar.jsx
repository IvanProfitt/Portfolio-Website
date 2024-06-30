import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const pages = ['Projects', 'About Me', 'Resume', 'Blog'];


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [prevScrollPos, setPrevScrollPos] = React.useState(0);
  const [visible, setVisible] = React.useState(true);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <AppBar position="fixed" sx={{
      borderBottom: "1px solid black",
      backgroundColor: "white",
      color: "black",
      width: "100%",
      left: 0,
      right: 0, 
      margin: "0 auto",
      top: visible ? '0' : '-150px',
      transition: 'top 0.6s',
      zIndex: 1000,
    }}>
      <Box className="marquee"
        sx={{
          backgroundColor:"black",
          color:"white"
        }}>
          <Box className="marquee-content">
            <Typography variant="subheading1">TEST</Typography>
          </Box>
        </Box>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
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
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              fontWeight: 600,
              fontSize:30,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
              flexGrow: 1,
              textAlign: 'center',
            }}
          >
            Ivan Profitt
          </Typography>
          <Box sx={{ flexGrow: 1, justifyContent: 'flex-end', display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                className="nb-button default"
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block', margin: 2 }}
              >
                <Typography sx={{ fontSize: '1.5rem', textAlign: 'center' }}>{page}</Typography>
              </Button>
            ))}
          </Box>
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
                <Typography sx={{ fontSize: '1.5rem', textAlign: 'center', margin: 3, padding: 1 }}>
                  {page}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
