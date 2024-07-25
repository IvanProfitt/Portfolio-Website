import { Typography, Box } from "@mui/material";
import NavBar from "./NavBar";
import React from "react";

function AboutMeSection(){
    return(
        <>
           <NavBar/>
           <Box
            sx={{
            width: "100%",
            borderTop: 2,
            display: "flex",
            flexDirection: "column",
            margin: 5,
            alignItems: "center",
            textAlign:'center'
            }}>
                <Typography variant="h1">About Me</Typography>
                <Typography variant="body1" 
                sx={{
                fontSize:"2em",
                width:'50%',
                padding:2,
                }}>
                A full stack web developer, continuing to learn new technologies. Professional freelancing experience with many satisfied clients. Enjoyer of game development and machine learning.
                Experienced in game jams and hackathons. Former competitive programmer.
                </Typography>
            </Box>
        </>


    )
}


export default AboutMeSection;
