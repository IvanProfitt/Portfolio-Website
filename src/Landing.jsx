import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

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
                 sx={{
                      marginBottom:0,
                      fontWeight:600}} variant="h1">Hi! I&apos;m Ivan Profitt</Typography>
                <Typography variant="h2" sx={{
                    fontWeight:400

                }}>Full-Stack Developer, Philosophy Student</Typography>
                <Box
                sx={{
                    display:"flex",
                    marginTop:5,
                }}>
                    <Link
                    style ={{ marginRight:20}} to="https://docs.google.com/document/d/1e4jrIq5O_GRk81gMx6GdrALcZnSUSQYvBOTS4idGnJ4" target="_blank" className="nb-button default">My Resume</Link>
                    <Link style={{ marginLeft:20}}to="/Projects" className="nb-button default">Projects</Link>
                </Box>

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
                    WebkitBoxShadow: "10px 10px 0px -3px rgba(0,0,0,0.75)",
                    MozBoxShadow: "10px 10px 0px -3px rgba(0,0,0,0.75)",
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
