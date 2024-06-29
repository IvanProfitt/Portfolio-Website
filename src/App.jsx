import React from 'react';
import NavBar from './NavBar';
import { Box } from '@mui/material';
import Landing from './Landing';
import Projects from './Projects'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  typography: {
    fontFamily: 'Noto Serif, Public Sans, sans-serif',
    h6: {
      fontFamily: 'Noto Serif, serif',  // Ensure Noto Serif is used for h6
    },
    h5: {
      fontFamily: 'Noto Serif, serif',  // Ensure Noto Serif is used for h5
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          fontSize: '62.5%',
          fontFamily: 'Noto Serif, Public Sans, sans-serif',
          color: 'black',
          width: '100%',
        },
        body: {
          margin: 0,
          width: '100%',
          boxSizing: 'border-box',
          fontFamily: 'Noto Serif, Public Sans, sans-serif',
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
        paddingTop: "min(10vh,280px)",}}>
          <Landing
          sx={{
            paddingTop:"64px",
            height:"100vh",
          }} />
        </Box>
        <Projects />
      </Box>
    </ThemeProvider>
  );
}

export default App;