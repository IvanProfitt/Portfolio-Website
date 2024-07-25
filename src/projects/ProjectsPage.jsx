import { Typography } from "@mui/material";
import NavBar from '../NavBar';
import { Box, Grid } from "@mui/material";
import ProjectBox from "./ProjectBox";
import projectInfo from "./projectInfo";
import Link from "@mui/material/Link";

function ProjectsPage(){
    return(
        <>
        <NavBar />
        <Box  sx={{
          paddingTop:"3vh",
          alignItems: 'center',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}>
        <Typography
        variant="h1">PROJECTS</Typography>
        <Grid container spacing={2} sx={{
          width: '80%',
          justifyContent:'center',
          alignItems:'center',
        }}>

            {projectInfo.map((projectInfo) => (
            <Link to={projectInfo.link} key={projectInfo.name}>
              <Grid item xs={12} sm={6} md={4}>
            <ProjectBox project={projectInfo}  />
            </Grid>
            </Link>
          ))}
          </Grid>
        </Box>
        </>
    )
}

export default ProjectsPage;