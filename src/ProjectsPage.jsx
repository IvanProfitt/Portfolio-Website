import { Typography } from "@mui/material";
import NavBar from './NavBar';
import { Box } from "@mui/material";
import Projects from "./Projects";

function ProjectsPage(){
    return(
        <>
        <NavBar />
        <Box  sx={{
          alignItems: 'center',
          textAlign: 'center',
        }}>
        <Typography
        variant="h1">PROJECTS</Typography>
        <Projects />
        </Box>
        </>
    )
}

export default ProjectsPage;