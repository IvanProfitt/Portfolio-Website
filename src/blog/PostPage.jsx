import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import { getPost } from './getPosts';
import BlogRight from './BlogRight';
import NavBar from '../NavBar.jsx';



function PostPage() {
  const { slug } = useParams();
  const [PostContent, setPostContent] = useState(null);
  const [meta, setMeta] = useState(null);

  useEffect(() => {
    const loadPost = () => {
      const post = getPost(slug);

      if (post) {
        setMeta(post.meta);
        setPostContent(() => post.default);
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
    <NavBar />

        <Typography variant="h1" sx={{ margin: '0 auto', padding: 3, width: '100%', textAlign: 'center' }}>
          {meta.title}
        </Typography>

        <Box sx={{
          display:'flex',
          flexDirection:'row',
        }}>
        <Box sx={{
        width: '70%',
      }}>
        <PostContent components={{
          h1: (props) => <Typography variant="h1" {...props} sx={{ padding: 1, width: '100%', textAlign: 'center', fontWeight:700}} />,
          h2: (props) => <Typography variant="h2" {...props} sx={{padding: 3, textAlign: 'left', fontWeight:500 }} />,
          h3: (props) => <Typography variant="h3" {...props} sx={{ padding: 3, textAlign: 'left', fontWeight:400, fontSize:25}} />,
          p: (props) => <Typography variant="body1" {...props} sx={{ padding: 3, textAlign: 'left', fontSize:15 }} />,
          li: (props) => <Typography variant="body1" {...props} sx={{  fontSize:15 }} />,
        }}/>
        </Box>
        <BlogRight />
        </Box>
    </>
  );
}

export default PostPage;
