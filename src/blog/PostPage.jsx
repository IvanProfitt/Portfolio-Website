import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import { getPost } from './getPosts';

function PostPage() {
  const { slug } = useParams();
  const [PostContent, setPostContent] = useState(null);
  const [meta, setMeta] = useState(null);

  useEffect(() => {
    const loadPost = () => {
      const post = getPost(slug);

      if (post) {
        setMeta(post.meta);
        setPostContent(() => post.default); // Set MDX component
      } else {
        console.error('Post not found:', slug);
      }
    };

    loadPost();
  }, [slug]);

  if (!PostContent) {
    return <Typography variant="body1">Loading...</Typography>;
  }

  return (
    <>
      {meta && <Typography variant="h1">{meta.title}</Typography>}
      <PostContent /> {/* Render the MDX content */}
    </>
  );
}

export default PostPage;
