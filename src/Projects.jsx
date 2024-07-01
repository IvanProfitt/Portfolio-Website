import { Box } from "@mui/material";
import { Link } from "@mui/material";
import Typography from "@mui/material/Typography";
import ProjectBox from "./ProjectBox";

const projectInfo=[
  {imgUrl: "./Sprout Logo transparent.png", link: "https://www.youtube.com",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero earum, saepe error ratione consequuntur ex blanditiis esse et itaque magni quisquam ipsa eius quo praesentium nemo. Odio reiciendis distinctio similique",
  },
  {imgUrl: "./Sprout Logo transparent.png", link: "https://www.youtube.com",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero earum, saepe error ratione consequuntur ex blanditiis esse et itaque magni quisquam ipsa eius quo praesentium nemo. Odio reiciendis distinctio similique",
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
        flexDirection: "column",
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
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 8, 
        }}
      >

        {projectInfo.map((projectInfo) => (
            <ProjectBox project={projectInfo} />
          ))}


      </Box>
      <Link className="nb-button blue"
      sx={{
        marginTop:8,
        marginBottom:0,
      }}>View More</Link>
    </Box>
  );
}

export default Projects;
