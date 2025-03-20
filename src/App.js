import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Feed from './Components/Feed';
import TopUsers from './Components/TopUsers';
import TrendingPosts from './Components/TrendingPosts';


function App() {
  return (
    <Router>
      <div style={{ backgroundColor: "#f5f5f5", color: "#333", height: "100vh", padding: "50px", textAlign: "center" }}>
        <nav>
          <Link to="/top-users" style={linkStyle}>Top Users</Link>
          <Link to="/feed" style={linkStyle}>Feed</Link>
          <Link to="/trending-posts" style={linkStyle}>Trending Posts</Link>
        </nav>

        <Routes>
          <Route path="/top-users" element={<TopUsers />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/trending-posts" element={<TrendingPosts />} />
        </Routes>
      </div>
    </Router>
  );
}

const linkStyle = {
  margin: "0 20px",
  color: "#1976D2",
  textDecoration: "none",
  fontSize: "18px"
};

export default App;
