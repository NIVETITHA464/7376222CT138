import React, { useEffect, useState } from 'react';
import { getUsers, getPosts } from '../api';
import '../Pages/TopUsers.css';

const TopUsers = () => {
  const [topUsers, setTopUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const usersRes = await getUsers();
      const postsRes = await getPosts();

      const userPostCount = {};
      postsRes.data.forEach(post => {
        userPostCount[post.userId] = (userPostCount[post.userId] || 0) + 1;
      });

      const usersWithCount = usersRes.data.map(user => ({
        ...user,
        postCount: userPostCount[user.id] || 0
      }));

      const sortedUsers = usersWithCount.sort((a, b) => b.postCount - a.postCount);
      setTopUsers(sortedUsers.slice(0, 5));
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Top Users</h2>
      {topUsers.map(user => (
        <div key={user.id}>
          {user.name} - Posts: {user.postCount}
        </div>
      ))}
    </div>
  );
};

export default TopUsers;
