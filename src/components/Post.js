import React from "react";
import { connect } from "react-redux";

import {deletePost} from '../actions/postActions';

const Post = props => {
  console.log(props);

  const handleClick = (id) => {
    props.deletePost(id);
    props.history.push('/');
  }

  return (
    <div className="container">
      {props.post ? (
        <div className="post">
          <h4>{props.post.title}</h4>
          <p>{props.post.body}</p>
          <div className="center">
            <button className="btn grey" onClick={() => handleClick(props.post.id)}>
            Delete Post
            </button>
          </div>
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

const mapDispatchToProps = dispatch => {
  return {
    deletePost: id => dispatch(deletePost(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
