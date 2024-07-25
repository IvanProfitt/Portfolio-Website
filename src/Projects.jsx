import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import ProjectBox from "./ProjectBox";

const projectInfo=[
  {imgUrl: "./Sprout Logo transparent.png", link: "https://www.youtube.com", name:"Sprout",
    desc: "A freelance project. Implementing and hosting websites for local businesses, while creating SEO strategies to increase traffic and engagement."
  },
  {imgUrl: "./Sprout Logo transparent.png", link: "https://www.youtube.com", name: "E-Commerce Website",
    desc: "Utilizing React, TypeScript, and Material UI for the frontend, with NodeJS, Express, and MongoDB for the backend. This application allows the user to shop with an attractive UI, as well as implements inventory management for the backend. ",
  },
  {imgUrl: "./Sprout Logo transparent.png", link: "https://www.youtube.com",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero earum, saepe error ratione consequuntur ex blanditiis esse et itaque magni quisquam ipsa eius quo praesentium nemo. Odio reiciendis distinctio similique",
  }
]

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
            <ProjectBox project={projectInfo} />
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
