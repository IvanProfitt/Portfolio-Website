import { Box, Link, Typography } from "@mui/material"

function ProjectBox({ project }) {
    return(
        <Box
        className="card"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 2, 
          justifyContent: "center",
          border: 2, 
        }}
      >
        <Box
          component="img"
          src={project.imgUrl}
          sx={{
            width: 150,
          }}
        />
        <Link to={project.link} />
        <Typography variant="h6">
            {project.desc}
        </Typography>
        <Link className="nb-button default"
        sx={{
        }}>Learn More</Link>
      </Box>
    )
}

export default ProjectBox;