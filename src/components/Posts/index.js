import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchBlogPostsRequest} from "../../actions";

// import {Link} from 'react-router';

class Posts extends Component {

  componentWillMount() {
    this.props.fetchBlogPosts();
  }

  render() {
    return (
      <div>
        <h1>Posts:</h1>
        <div>
          {this.props.posts.map((post, i) => this.renderPost(post, i))}
        </div>
      </div>
    );
  }

  renderPost(post, i) {
    return (
      <div key={i}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({posts: state.blogPosts.posts})
const mapDispatchToProps = dispatch => ({fetchBlogPosts: () => dispatch(fetchBlogPostsRequest())})

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
