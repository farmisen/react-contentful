import { call, put } from 'redux-saga/effects'
import * as TYPES from '../types'
import contentful from '../services/contentful'



//
// export const fetch_contentful = async (type) => {
//   const response = await fetch(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}&content_type=${type}&include=1`)
//   return await response.json()
// }


export const fetch_contentful = async (type) => {
  return await contentful.getEntries({
    content_type: type
  })
  // const response = await fetch(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}&content_type=${type}&include=1`)
  // return await response.json()
}

export const fetchBlogPostsRequest = () => ({
    type: TYPES.FETCH_BLOG_POSTS_REQUEST
})

export function* fetchBlogPosts(action) {
    try {
        const blogPosts = yield call(fetch_contentful, 'blogPost');
        yield put({type: TYPES.FETCH_BLOG_POSTS_SUCCESS, data: blogPosts.items});
    } catch (e) {
        console.log(e)
    }
}
