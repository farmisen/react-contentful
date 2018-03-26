import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

const Posts = (props) => {

  const renderPost = (post) => {
    return (
      <div key={post.sys.id}>
        <h2><Link to={`/posts/${post.sys.id}`}>{post.fields.title}</Link></h2>
        <p>{post.fields.body}</p>
        <Link to={`/authors/${post.sys.id}`}>{post.fields.author.fields.name}</Link>
        <hr/>
      </div>
    )
  };

  return (
    <div>
      <h1>Posts:</h1>
      <div>
        {props.posts.map((post) => renderPost(post))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({posts: state.blogPosts.posts});

export default connect(mapStateToProps)(Posts);
