import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';

const BlogPostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState({ content: '', data: {} });

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await import(`/src/blog/posts/${slug}.md?raw`);
        const { data, content } = matter(response.default);
        setPost({ content, data });
      } catch (err) {
        console.error("Error fetching post:", err);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="prose lg:prose-xl">
        <h1>{post.data.title}</h1>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
    </div>
  );
};

export default BlogPostPage;
