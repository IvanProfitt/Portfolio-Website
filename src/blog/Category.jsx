import { useParams } from 'react-router-dom';
import categories from './settings/categories';
import { getAllPosts } from './getPosts';
import PostBox from './PostBox';

const Category = () => {
  const { categoryId } = useParams();
  const posts = getAllPosts();

  const category = categories.find(cat => cat.id === categoryId);
  
  if (!category) {
    return <div>Category not found</div>;
  }

  const categoryPosts = posts.filter(post => post.meta.categoryID === categoryId);

  return (
    <div>
      <h1>{category.name}</h1>
      <p>{category.description}</p>
      {categoryPosts.length > 0 ? (
        <ul>
          {categoryPosts.map(post => (
            <PostBox key={post.slug} post = {post}></PostBox>
          ))}
        </ul>
      ) : (
        <p>No posts found for this category.</p>
      )}
    </div>
  );
};

export default Category;
