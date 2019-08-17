import React, {useState, useEffect} from "react";
import axios from "axios";

const Home = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            setPosts(
                response.data
            );
        })
        .catch(err => console.error(err));
      return () => {};
    }, [])

    const postList = posts.length > 0 ? (
        posts.map(post => (
            <div className="post card" key={post.id}>
                <div className="card-content">
                    <span className="card-title">{post.title}</span>
                    <p>{post.body}</p>
                </div>
            </div>
        ))
    ) : (
        <div className="center">No posts here</div>
    )
  return (
    <div className="container">
      <h4 className="center">Home</h4>
      <div className="list">
        {postList}
      </div>
    </div>
  );
};

export default Home;
