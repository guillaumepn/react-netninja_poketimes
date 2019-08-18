import React from "react";
import { connect } from "react-redux";

const Post = props => {
  return (
    <div className="container">
      {props.post ? (
        <div className="post">
          <h4>{props.post.title}</h4>
          <p>{props.post.body}</p>
        </div>
      ) : (
        <div className="center">Loading...</div>
      )}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find(post => post.id === id)
  };
};

export default connect(mapStateToProps)(Post);
