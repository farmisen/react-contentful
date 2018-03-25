import {takeLatest} from 'redux-saga/effects'

import * as TYPES from '../types'
import {fetchBlogPosts} from '../actions'

function* fetchBlogPostsSaga() {
  yield takeLatest(TYPES.FETCH_BLOG_POSTS_REQUEST, fetchBlogPosts);
}

export default fetchBlogPostsSaga
