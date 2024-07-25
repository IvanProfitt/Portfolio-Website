import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import ProjectBox from "./ProjectBox";
import projectInfo from "./projectInfo";


function Projects() {
  return (
    <Box
      sx={{
        width: "100%",
        borderTop: 2,
        display: "flex",
        flexDirection:'column', 
        margin: 5,
        alignItems: "center",
      }}
    >
      <Typography variant="h2"
      sx={{
        fontWeight:500,
        marginTop:3
      }}>PROJECTS</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection:{md:'row', sm:'column', xs:'column'},
          justifyContent: {md:"space-between", sm:"center"},
          gap:{md:8, sm:2}
        }}
      >

        {projectInfo.map((projectInfo) => (
            <Link to={projectInfo.link} key={projectInfo.name}>
            <ProjectBox project={projectInfo}  />
            </Link>
          ))}


      </Box>
      <Link 
      to="/projects"
      className="nb-button blue"
      sx={{
        marginTop:8,
        marginBottom:0,
      }}>View More</Link>
    </Box>
  );
}

export default Projects;
