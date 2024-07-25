import React from "react";
import { Box, Typography, Link as MuiLink } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';


// PropTypes validation
ProjectBox.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

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
      <Typography variant="h6">
        {project.desc}
      </Typography>
      <Box
        sx={{
          margin: 3,
        }}
      >
      </Box>
    </Box>
  );
}

export default ProjectBox;
