import { Box } from "@mui/material";
import { Link } from "@mui/material";
import Typography from "@mui/material/Typography";

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
            src="./Sprout Logo transparent.png"
            sx={{
              width: 150,
            }}
          />
          <Link to="https://www.youtube.com" />
          <Typography variant="h6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero earum,
            saepe error ratione consequuntur ex blanditiis esse et itaque magni
            quisquam ipsa eius quo praesentium nemo. Odio reiciendis distinctio
            similique.
          </Typography>
          <h1>LINK</h1>
        </Box>

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
            src="./Sprout Logo transparent.png"
            sx={{
              width: 150,
            }}
          />
          <Link to="https://www.youtube.com" />
          <Typography variant="h6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero earum,
            saepe error ratione consequuntur ex blanditiis esse et itaque magni
            quisquam ipsa eius quo praesentium nemo. Odio reiciendis distinctio
            similique.
          </Typography>
          <h1>LINK</h1>
        </Box>

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
            src="./Sprout Logo transparent.png"
            sx={{
              width: 150,
            }}
          />
          <Link to="https://www.youtube.com" />
          <Typography variant="h6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero earum,
            saepe error ratione consequuntur ex blanditiis esse et itaque magni
            quisquam ipsa eius quo praesentium nemo. Odio reiciendis distinctio
            similique.
          </Typography>
          <h1>LINK</h1>
        </Box>
      </Box>
    </Box>
  );
}

export default Projects;
