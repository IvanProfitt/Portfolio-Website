import { Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function PostBox({ post }) {
  const date = new Date(post.meta.published);
  const formattedDate = !isNaN(date)
    ? date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    : "Invalid Date";

  return (
    <Link to={`/blog/post/${post.slug}`}>
      <Box className="card" sx={{
        display: "flex",
        width: "80%",
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
        }}>
          {post.meta.description}
        </Typography>
        <Typography variant="subtitle1">
          Published: {formattedDate}
        </Typography>
      </Box>
    </Link>
  );
}

PostBox.propTypes = {
  post: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    meta: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      published: PropTypes.string.isRequired, 
    }).isRequired,
  }).isRequired,
};

export default PostBox;
