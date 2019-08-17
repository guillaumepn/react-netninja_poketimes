import React, { useState, useEffect } from "react";
import axios from "axios";

const Post = props => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const id = props.match.params.post_id;
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => setPost(response.data))
      .catch(err => console.error(err));
  }, [props]);

  return (
    <div className="container">
      {post ? (
        <div className="post">
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ) : (
        <div className="center">Loading...</div>
      )}
    </div>
  );
};

export default Post;
