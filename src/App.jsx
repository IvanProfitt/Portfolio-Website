import NavBar from './NavBar';
import { Box } from '@mui/material';
import Landing from './Landing';
import Projects from './Projects'
import AboutMe from './AboutMe';
import Skills from './Skills';

function App() {
  return (
      <Box>
      <Box style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '90%',
        margin: '0 auto',
      }}>
        <NavBar position="fixed" />
          <Landing
          sx={{
            paddingTop:"64px",
            height:"100vh",
          }} />
        <Projects />
        <AboutMe
        sx={{
          height:'50vh',
          width:'90%',
        }} />
        <Skills />


      </Box>
      </Box>
  );
}

export default App;
