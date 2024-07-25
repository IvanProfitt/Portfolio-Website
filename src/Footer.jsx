import { Typography, Box, Link } from '@mui/material';
import React from 'react';






function Footer(){
    return(
        <Box sx={{
            borderTop:'3px solid black',
            display:'flex',
            width:'100%',
            justifyContent:'space-between',
            paddingTop:'20px',
        }}> 
        <Box sx={{
            justifyContent:'left',
            display:'flex',

        }}>

            <Link to="https://www.github.com/ivanprofitt" target="_blank" rel="noopener noreferrer">
                <Box sx={{
                    height: '50px',
                    width: '50px'
                }}>
                    <img src="./logos/github-original.svg" alt="GitHub" style={{ height: '100%', width: '100%' }} />
                </Box>
            </Link>

            <Link to="https://www.linkedin.com/in/ivanprofitt/" target="_blank" rel="noopener noreferrer">
                <Box sx={{
                    height: '50px',
                    width: '50px'
                }}>
                    <img src="./logos/linkedin-plain.svg" alt="GitHub" style={{ height: '100%', width: '100%' }} />
                </Box>
            </Link>
        </Box>
        <Box sx={{
            justifyContent:'right',
            width:'30%',
        }}
        >



            <Typography variant="body1" sx={{
                fontSize:'14px',
            }}>Designed using Figma, coded with Visual Studio Code. Built with Vite, React, and Material UI. Deployed with Github Pages.</Typography>
        </Box>
        </Box>

    )
}

export default Footer;