import { getAllPosts } from '../blog/getPosts';
import Posts from '../components/Posts';

const BlogList = () => {
  const posts = getAllPosts(); // Fetch all posts from local files

  return (
    <div>
      <Posts posts={posts} /> {/* Pass posts to the Posts component */}
    </div>
  );
};

export default BlogList;
