// src/blog/getPosts.js
const posts = import.meta.glob('./posts/*.mdx', { eager: true });


export function getAllPosts() {

    console.log("Posts Object:", posts); // Debugging line
    return Object.entries(posts).map(([path, module]) => {
      const slug = path.split('/').pop().replace('.mdx', '');
      console.log(`Path: ${path}, Slug: ${slug}, Meta:`, module.meta); // Debugging line
      return {
        slug,
        meta: module.meta,
      };
    });
  }
  
  export function getPost(slug) {
    const postPath = `./posts/${slug}.mdx`;
    const post = posts[postPath];
    console.log("Post Path:", postPath); // Debugging line
    console.log("Post Object:", post); // Debugging line
    return post;
  }