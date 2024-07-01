import { Typography, Box } from "@mui/material"


function AboutMe(){
    return(
        <Box
        sx={{
            width: "100%",
            borderTop: 2,
            display: "flex",
            flexDirection: "column",
            margin: 5,
            alignItems: "center",
          }}>
        <Typography variant="h1">About Me</Typography>
        <Typography variant="body1"
        sx={{
            fontSize:"3em",
        }}>I like movies and books and coding</Typography>
        </Box>

    )
}

export default AboutMe;