import NavBar from './NavBar';
import { Box } from '@mui/material';
import Landing from './Landing';
import Projects from './projects/Projects'
import AboutMeSection from './AboutMeSection';
import Skills from './Skills.jsx';
import Footer from './Footer';


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
        <AboutMeSection
        sx={{
          height:'50vh',
          width:'90%',
        }} />
        <Skills />
        <Footer />

      </Box>
      </Box>
  );
}

export default App;
