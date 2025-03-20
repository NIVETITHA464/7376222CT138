import React, { useEffect, useState } from 'react';
import { getPosts } from '../api';
import '../Pages/Feed.css';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const postsRes = await getPosts();
    const sortedPosts = postsRes.data.sort((a, b) => b.id - a.id); // Newest on top
    setPosts(sortedPosts);
  };

  useEffect(() => {
    fetchPosts();
    const interval = setInterval(fetchPosts, 10000); // Poll every 10 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Live Feed</h2>
      {posts.map(post => (
        <div key={post.id}>
          {post.title}
        </div>
      ))}
    </div>
  );
};

export default Feed;
