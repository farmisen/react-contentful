import React from 'react';
import {connect} from 'react-redux';

const AuthorDetails = (props) => {
  const postId = props.match.params.postId
  const post = props.posts.find(post => post.sys.id === postId)

  if (null == post) {
    return (<span>...</span>)
  }

  const author = post.fields.author
  const avatar = author.fields.picture

  return (
    <div>
      <h2>{author.fields.name}</h2>
      <img src={avatar.fields.file.url} alt={avatar.fields.file.fileName}/>
      <p>{author.fields.bio}</p>
    </div>
  )
}

const mapStateToProps = state => ({posts: state.blogPosts.posts})
export default connect(mapStateToProps)(AuthorDetails);
