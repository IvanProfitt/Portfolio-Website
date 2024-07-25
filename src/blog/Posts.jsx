// src/components/Posts.jsx
import React from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link for routing

const Posts = ({ posts }) => {
  return (
    <>
      <Typography variant="h1">Posts</Typography>
      <Typography variant="h2" sx={{ marginTop: "5vw" }}>Recent Posts</Typography>
      <ul>
        {posts.length > 0 ? (
          posts.map((post) => (
            <li key={post.slug}>
              <Link to={`/blog/${post.slug}`}>{post.meta.title}</Link>
            </li>
          ))
        ) : (
          <Typography variant="body1">No posts available</Typography>
        )}
      </ul>
    </>
  );
};

export default Posts;
