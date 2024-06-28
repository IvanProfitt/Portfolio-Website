import React from 'react';
import NavBar from './NavBar';
import { Box } from '@mui/material';
import Landing from './Landing';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          fontSize: '62.5%',
          fontFamily: 'public-sans, sans-serif',
          color: 'black',
          width:'100%'
        },
        body: {
          margin: 0,
          width:'100%',
          boxSizing: 'border-box',
          fontFamily: 'public-sans, sans-serif',
          backgroundColor: '#f5f4ed',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '90%',
        margin: '0 auto',
      }}>
        <NavBar position="fixed" />
        <Box 
        sx={{
        padding: '20px',
        marginTop: {
          md: '172px',
          sm: '145px',
      }}}>
          <Landing />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
