import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import PostBox from './PostBox';

const Posts = ({ posts }) => {
  const sortedPosts = posts.sort((a, b) => new Date(b.meta.published) - new Date(a.meta.published));
  return (
    <>
      <Typography variant="h1">Posts</Typography>
      <Typography variant="h2" sx={{ marginTop: "5vw" }}>Recent Posts</Typography>
      <ul>
      {sortedPosts.length > 0 ? (
          sortedPosts.map((post) => (
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
