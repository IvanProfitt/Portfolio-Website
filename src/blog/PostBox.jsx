import { Typography, Box } from "@mui/material";
import PropTypes from 'prop-types';

PostBox.propTypes = {
  post: PropTypes.object.isRequired
}

function PostBox({ post }) {
  return (
    <Box sx={{ marginBottom: '1rem' }}>
      <Typography variant="h6">{post.title}</Typography>
      <Typography variant="body2">{post.description}</Typography>
      {/* Add other post details as needed */}
    </Box>
  );
}

export default PostBox;
