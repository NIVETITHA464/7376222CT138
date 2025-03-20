import React, { useEffect, useState } from 'react';
import { getPosts, getComments } from '../api';
import '../Pages/TrendingPosts.css';

const TrendingPosts = () => {
  const [trendingPosts, setTrendingPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const postsRes = await getPosts();
      const commentsRes = await getComments();

      const commentCount = {};
      commentsRes.data.forEach(comment => {
        commentCount[comment.postId] = (commentCount[comment.postId] || 0) + 1;
      });

      const maxComments = Math.max(...Object.values(commentCount));

      const trending = postsRes.data.filter(post => commentCount[post.id] === maxComments);
      setTrendingPosts(trending);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Trending Posts</h2>
      {trendingPosts.map(post => (
        <div key={post.id}>
          {post.title}
        </div>
      ))}
    </div>
  );
};

export default TrendingPosts;
