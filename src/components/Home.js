import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        setPosts(response.data);
      })
      .catch(err => console.error(err));
  }, []);

  const postList =
    posts.length > 0 ? (
      posts.map(post => (
        <div className="post card" key={post.id}>
          <div className="card-content">
            <Link to={`/${post.id}`}>
              <span className="card-title">{post.title}</span>
              <p>{post.body}</p>
            </Link>
          </div>
        </div>
      ))
    ) : (
      <div className="center">No posts here</div>
    );
  return (
    <div className="container">
      <h4 className="center">Home</h4>
      <div className="list">{postList}</div>
    </div>
  );
};

export default Home;
