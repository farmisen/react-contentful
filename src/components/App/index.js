import React, {Component} from 'react';
import './styles.css'
import Posts from '../Posts'
import PostDetails from '../PostDetails'
import AuthorDetails from '../AuthorDetails'
import {connect} from 'react-redux';
import {fetchBlogPostsRequest} from "../../actions";
import { Switch, Route, Link, withRouter } from 'react-router-dom'

class App extends Component {

  componentWillMount() {
    this.props.fetchBlogPosts();
  }

  render() {
    return (
      <div>
      <header>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/posts'>Posts</Link></li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" render={ () => <h1>Home</h1>}/>
        <Route exact path="/posts" component={Posts}/>
        <Route path="/posts/:postId" component={PostDetails}/>
        <Route path="/authors/:postId" component={AuthorDetails}/>
      </Switch>
      </div>
    )
  }

}
// export default App;
const mapStateToProps = state => ({posts: state.blogPosts.posts})
const mapDispatchToProps = dispatch => ({fetchBlogPosts: () => dispatch(fetchBlogPostsRequest())})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App)); // TODO check if withrouter is the optimal way (https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/blocked-updates.md)
