import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

function Landing() {
    return (
        <Box className="landingText" sx={{
            flexDirection:{md:'row', sm:'column', xs:'column'},
            height:'85vh',
            display: 'flex',
            alignItems:'center',
            justifyContent:'center',
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                margin: 'auto'
            }}>
                <Typography 
                 sx={{padding:5, 
                      marginBottom:4,
                      fontWeight:600}} variant="h1">Hi! I'm Ivan Profitt</Typography>
                <Typography variant="h2" sx={{
                    fontWeight:500

                }}>Full-Stack Developer, Philosophy Student</Typography>
                <Typography variant="subtitle1">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa aliquid consequatur quo asperiores.
                    Atque, veniam incidunt eius dolore soluta excepturi sit iste nulla modi voluptate blanditiis quam,
                    eum aut minus.
                </Typography>
            </Box>

            <Box className="landingDiv" sx={{
                width: {sm:'100%'},
                marginLeft: 'auto', 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                
            }}>
                <Box
                component='img'
                sx={{
                    height: '50vh',
                    objectFit:'cover',
                    border:'5px solid black',
                    borderRadius:'5px'

                }}
                style={{
                    webkitBoxShadow: "10px 10px 0px -3px rgba(0,0,0,0.75)",
                    mozBoxShadow: "10px 10px 0px -3px rgba(0,0,0,0.75)",
                    boxShadow: "10px 10px 0px -3px rgba(0,0,0,0.75)"
                }}
                
                alt="Picture of Ivan"
                src="/IMG_20230422_221017.jpg"
                />
            </Box>
        </Box>
    );
}

export default Landing;
