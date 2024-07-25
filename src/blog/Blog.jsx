// src/pages/Blog.jsx
import { useState, useEffect } from 'react';
import NavBar from '../NavBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography, Link } from '@mui/material';
import Posts from '../blog/Posts';
import { getAllPosts } from '../blog/getPosts';
import categories from './settings/categories';

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = getAllPosts();
      setPosts(allPosts);
    };

    fetchPosts();
  }, []);

  return (
    <>
      <NavBar />
      <Typography variant="h1" component="h1" sx={{ color: 'black', textAlign: 'center', paddingTop: '3vh' }}>
        Ivan&apos;s Blog
      </Typography>
      <Box sx={{ margin: 'auto', paddingTop: '3vh', width: "80%" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Posts posts={posts} />
          </Grid>

          <Grid item xs={12} md={4}>
            <Box>
              <Typography variant="h1" component="h1" sx={{ color: 'black' }}>Categories</Typography>
              {categories.map((category) => (
                <div key={category.id}>
                  <Link href={`/blog/${category.id}`}>
                    <Typography variant="body1" sx={{ color: 'blue', textDecoration: 'none' }}>
                      {category.name}
                    </Typography>
                  </Link>
                </div>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Blog;
