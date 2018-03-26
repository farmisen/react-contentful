import React from 'react';
import {connect} from 'react-redux';

const PostDetails = (props) => {
  const postId = props.match.params.postId;
  const post = props.posts.find(post => post.sys.id === postId);

  if (null == post) {
    return (<span>...</span>)
  }

  const photo = post.fields.photo;

  return <div>
    <h2>{post.fields.title}</h2>
    <p>{post.fields.body}</p>
    <img src={photo.fields.file.url} alt={photo.fields.file.fileName}/>
  </div>
};

const mapStateToProps = state => ({posts: state.blogPosts.posts});
export default connect(mapStateToProps)(PostDetails);
