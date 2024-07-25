import { Typography, Box } from "@mui/material";

function Skills(){
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
        <Typography variant="h1">Skills</Typography>
        <Typography variant="h2">Languages</Typography>
        <Typography variant="body1">Java C# C++ JavaScript Python</Typography>
        <Typography variant="h2">Front End</Typography>
        <Typography variant="body1">Vit React HTML CSS Tailwind CSS </Typography>
        <Typography variant="h2">Back End</Typography>
        <Typography variant="body1">MongoDB Node.js</Typography>
        <Typography variant="h2">Libraries</Typography>
        <Typography variant="body1">Scikit-Learn TensorFlow 2.0 Keras</Typography>
        <Typography variant="h2">Miscellaneous</Typography>
        <Typography variant="body1">Git Linux Figma</Typography>


        </Box>

    )
}

export default Skills;