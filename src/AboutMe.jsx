import { Typography, Box } from "@mui/material";
import NavBar from "./NavBar";

function AboutMe(){
    return(
        <>
           <NavBar/>
           <Box
            sx={{
            width: "80%",
            display: "flex",
            flexDirection: "column",
            margin: '0 auto',
            paddingTop:5,
            alignItems: "center",
            }}>
                <Typography variant="h1">About Me</Typography>
                <Typography variant="body1"
                sx={{
                fontSize:"3em",
                }}>
                I am a full stack developer with a passion for learning. I have previously completed coursework in both Computer Science and Philosophy and
                am currently pursuing a degree in Philosophy, with plans to complete a bachelor&apos;s in Computer Science. I am a freelance developer, working with
                local businesses to help maintain their web presence.
                </Typography>
                <Typography variant="body1"
                sx={{
                fontSize:"3em",
                }}>
                    Outside of work, I enjoy playing video games, watching movies, and reading. I am currently learning Spanish and game design. 

                </Typography>
                <Typography variant="h2">Media</Typography>
                <Typography variant="h3">Favorite Movies</Typography>
                <Typography variant="body1">Check me out on </Typography> <a href="http://https://letterboxd.com/IvanProfitt">Letterboxd</a><Typography variant="body1">. Here are my current top 4:</Typography>
            </Box>
        </>


    )
}


export default AboutMe;
