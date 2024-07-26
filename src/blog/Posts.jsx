import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import PostBox from './PostBox';

const Posts = ({ posts }) => {
  return (
    <>
      <Typography variant="h1">Posts</Typography>
      <Typography variant="h2" sx={{ marginTop: "5vw" }}>Recent Posts</Typography>
      <ul>
        {posts.length > 0 ? (
          posts.map((post) => (
            <PostBox post={post} key={post._id} />
          ))
        ) : (
          <Typography variant="body1">No posts available</Typography>
        )}
      </ul>
    </>
  );
};

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Posts;
