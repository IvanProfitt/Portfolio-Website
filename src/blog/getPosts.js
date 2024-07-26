const posts = import.meta.glob('./posts/*.mdx', { eager: true });

console.log(posts);  // Add this line to check the structure of imported modules

export function getAllPosts() {
  return Object.entries(posts).map(([path, module]) => {
    const slug = path.split('/').pop().replace('.mdx', '');
    return {
      slug,
      meta: module.meta,
    };
  });
}

export function getPost(slug) {
  const postPath = `./posts/${slug}.mdx`;
  const post = posts[postPath];
  console.log(post);  // Add this line to check the structure of the post
  return post;
}
