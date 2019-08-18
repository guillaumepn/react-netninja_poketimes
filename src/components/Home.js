import React from "react";
import { Link } from "react-router-dom";

import Pokeball from "../pokeball.png";
import { connect } from "react-redux";

const Home = props => {
  console.log(props);

  const postList =
    props.posts.length > 0 ? (
      props.posts.map(post => (
        <div className="post card" key={post.id}>
          <img src={Pokeball} alt="Pokéball" />
          <div className="card-content">
            <Link to={`/${post.id}`}>
              <span className="card-title red-text">{post.title}</span>
              <p className="black-text">{post.body}</p>
            </Link>
          </div>
        </div>
      ))
    ) : (
      <div className="center">No posts here</div>
    );
  return (
    <div className="container home">
      <h4 className="center">Home</h4>
      <div className="list">{postList}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(Home);
