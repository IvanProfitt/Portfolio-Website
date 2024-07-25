
import { Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom'; 

const Posts = ({ posts }) => {
  return (
    <>
      <Typography variant="h1">Posts</Typography>
      <Typography variant="h2" sx={{ marginTop: "5vw" }}>Recent Posts</Typography>
      <ul>
        {posts.length > 0 ? (
          posts.map((post) => (
            <Link to={`/blog/post/${post.slug}`} key={post.slug}>
            <Box className="card" sx={{
              display: "flex",
              width:"80%",
              flexDirection: "column",
              border: "2px solid black",
              borderRadius: "10px",
              padding: "10px",
              margin: "10px",
            }}>
            <Typography variant="h2">
              {post.meta.title}
            </Typography>
            <Typography variant="subtitle1" sx={{
              fontSize: "1.5rem",
            }}>{post.meta.description}</Typography>
            </Box>
            </Link>
          ))
        ) : (
          <Typography variant="body1">No posts available</Typography>
        )}
      </ul>
    </>
  );
};

export default Posts;
