import { call, put } from 'redux-saga/effects'

import * as TYPES from '../types'


const API_BASE_URL = 'https://cdn.contentful.com';
const API_SPACE_ID = 'hciliew0ga5n';
const API_TOKEN = '3c52e655e9903a2ccf503f2e38514269df4b7562477e37963f9b70166ee50323';


export const fetch_contentful = async (type) => {
  const response = await fetch(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}&content_type=${type}`)
  return await response.json()
}

export const fetchBlogPostsRequest = () => ({
    type: TYPES.FETCH_BLOG_POSTS_REQUEST
})

export function* fetchBlogPosts(action) {
    try {
        const blogPosts = yield call(fetch_contentful, 'blogPost');
        yield put({type: TYPES.FETCH_BLOG_POSTS_SUCCESS, data: blogPosts.items.map(item => item.fields)});
    } catch (e) {
        console.log(e)
    }
}
