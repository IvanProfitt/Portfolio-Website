import fs from 'fs';
import path from 'path';
import RSS from 'rss';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const glob = require('glob');

const postsDir = path.resolve('posts');

function getAllPosts() {
  const files = glob.sync('*.mdx', { cwd: postsDir });
  
  return files.map(file => {
    const filePath = path.join(postsDir, file);
    const slug = path.basename(file, '.mdx');
    
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    let meta = {};
    try {
      const metaMatch = fileContent.match(/export const meta = {([\s\S]*?)}/);
      if (metaMatch) {
        const metaContent = `{${metaMatch[1]}}`;
        meta = eval(`(${metaContent})`);
      }
    } catch (err) {
      console.error('Error parsing metadata:', err);
    }

    return {
      slug,
      meta,
    };
  });
}

function generateRSS() {
  const feed = new RSS({
    title: `Ivan's Blog`,
    description: 'A blog from Ivan Profitt',
    feed_url: 'https://ivanprofitt.com/blog/rss.xml',
    site_url: 'https://ivanprofitt.com/blog',
    language: 'en',
    pubDate: new Date().toISOString(),
    ttl: '60',
  });

  const posts = getAllPosts();

  posts.forEach(post => {
    feed.item({
      title: post.meta.title,
      description: post.meta.description,
      url: `https://ivanprofitt.com/posts/${post.slug}`, 
      date: post.meta.published, 
    });
  });

  const rss = feed.xml({ indent: true });

  fs.writeFileSync('../public/rss.xml', rss);
}

generateRSS();
