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
import { Link } from 'react-router-dom';

const pages = [
  { name: 'Projects', link: '/projects' },
  { name: 'About Me', link: '/about' },
  { name: 'Resume', link: "https://docs.google.com/document/d/1e4jrIq5O_GRk81gMx6GdrALcZnSUSQYvBOTS4idGnJ4" },
  { name: 'Blog', link: '/blog' }
];

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
    <Box sx={{ paddingBottom: { md: "64px", sm: "48px" } }}>
      <AppBar position="fixed" sx={{
        borderBottom: "1px solid black",
        backgroundColor: "#f5f4ed",
        color: "black",
        width: "100%",
        left: 0,
        right: 0,
        margin: "0 auto",
        top: visible ? '0' : '-150px',
        transition: 'top 0.6s',
        zIndex: 1000,
      }}>
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
            <Link to="/">
              <Typography
                variant="h6"
                noWrap
                sx={{
                  fontWeight: 600,
                  fontSize: 30,
                  letterSpacing: '.2rem',
                  color: 'inherit',
                  textDecoration: 'none',
                  flexGrow: 1,
                  textAlign: 'center',
                }}
              >
                Ivan Profitt
              </Typography>
            </Link>
            <Box sx={{ flexGrow: 1, justifyContent: 'flex-end', display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Link to={page.link} key={page.name}>
                  <Button
                    className="nb-button default"
                    key={page.name}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'black', display: 'block', margin: 2 }}
                  >
                    <Typography sx={{ fontSize: '1.5rem', textAlign: 'center' }}>{page.name}</Typography>
                  </Button>
                </Link>
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
                width: '100%',
                left: 0,
                right: 0,
                '& .MuiPaper-root': {
                  width: '100%',
                  maxWidth: '100%',
                  left: 0,
                  right: 0,
                  backgroundColor: "#f5f4ed", // Set background color here
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Link to={page.link}>
                    <Button
                      className="nb-button default"
                      key={page.name}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: 'black', display: 'block', margin: 2 }}
                    >
                      <Typography sx={{ fontSize: '1.5rem', textAlign: 'center' }}>{page.name}</Typography>
                    </Button>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default ResponsiveAppBar;
