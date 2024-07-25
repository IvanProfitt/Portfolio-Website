import { Box, Link, Typography } from "@mui/material";

function ProjectBox({ project }) {
  return (
    <Box
      className="card"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 3,
        margin: 6,
        justifyContent: "center",
        border: 2,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          height: '100%',
          textAlign: 'center',
          fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', 
          whiteSpace: 'nowrap',
        }}
      >
        {project.name}
      </Typography>
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
      <Box
        sx={{
          margin: 3,
        }}
      >
        <Link className="nb-button default">Learn More</Link>
      </Box>
    </Box>
  );
}

export default ProjectBox;
