import Box from '@mui/material/Box';
import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import categories from './settings/categories.js';
import Socials from '../Socials.jsx';
const size=30;

function BlogRight(){
    return(
      <>
      
        <Box sx={{
          padding:5,
          paddingTop:15,
        }}>
              <Box sx={{ display: 'flex', alignItems: 'center'}}>
            <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
                <img src="/logos/rss-svgrepo-com.svg" alt="rss" width={size} height={size} />
            </a>
                <Socials size={size}/>
            </Box>
              <Typography variant="h1" component="h1" sx={{ color: 'black' , margin:'0 auto'}}>Categories</Typography>
              {categories.map((category) => (
                <div key={category.id}>
                  <Link to={`/blog/category/${category.id}`}>
                  <Button className='nb-button default' sx={{
                    margin:1,
                  }}>
                    <Typography variant="body1" sx={{ color: 'blue', textDecoration: 'none' }}>
                      {category.name}
                    </Typography>
                    </Button>
                  </Link>
                </div>
              ))}
            </Box>
            </>
    )
}



export default BlogRight;