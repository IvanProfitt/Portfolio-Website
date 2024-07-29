import { Link } from "react-router-dom";
import { Box } from "@mui/material";

function Socials({ size = 50 }) {
    return (
        <Box sx={{ display: 'flex' }}>
            <Link to="https://www.github.com/ivanprofitt" target="_blank" rel="noopener noreferrer">
                <Box sx={{
                    height: `${size}px`,
                    width: `${size}px`
                }}>
                    <img src="./logos/github-original.svg" alt="GitHub" style={{ height: '100%', width: '100%' }} />
                </Box>
            </Link>

            <Link to="https://www.linkedin.com/in/ivanprofitt/" target="_blank" rel="noopener noreferrer">
                <Box sx={{
                    height: `${size}px`,
                    width: `${size}px`
                }}>
                    <img src="./logos/linkedin-plain.svg" alt="LinkedIn" style={{ height: '100%', width: '100%' }} />
                </Box>
            </Link>

            
            <Link to="https://letterboxd.com/IvanProfitt/" target="_blank" rel="noopener noreferrer">
                <Box sx={{
                    height: `${size}px`,
                    width: `${size}px`
                }}>
                    <img src="./logos/letterboxd.png" alt="letterboxd" style={{ height: '100%', width: '100%' }} />
                </Box>
            </Link>
        </Box>
    );
}

export default Socials;
