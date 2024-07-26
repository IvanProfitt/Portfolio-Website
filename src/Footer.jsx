import { Typography, Box, Link } from '@mui/material';
import Socials from './Socials';






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
            <Socials  sx={{
                display:'flex'
                
            }}/>
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