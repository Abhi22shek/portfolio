import { useState, useEffect } from 'react';
import matter from 'gray-matter';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postModules = import.meta.glob('/src/blog/posts/*.md');
      const postPromises = Object.entries(postModules).map(async ([path, resolver]) => {
        const postContent = await resolver();
        const { data } = matter(postContent.default);
        const slug = path.split('/').pop().replace('.md', '');
        return { ...data, slug };
      });
      const fetchedPosts = await Promise.all(postPromises);
      setPosts(fetchedPosts);
    };

    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid gap-8">
        {posts.map(post => (
          <div key={post.slug} className="border p-4 rounded-lg">
            <h2 className="text-2xl font-bold">
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="text-gray-600">{post.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
