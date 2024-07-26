import { useState, useEffect } from 'react';
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
    return <Typography variant="body1">Post not found!</Typography>;
  }

  return (
    <>
      {meta && <Typography variant="h1" sx={{
        margin:'0 auto',
        padding:3,
        width:'100%',
        textAlign:'center',
      }}>{meta.title}</Typography>}
      <PostContent />
    </>
  );
}

export default PostPage;
