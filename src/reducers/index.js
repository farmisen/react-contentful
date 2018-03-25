import { combineReducers } from 'redux'
import * as TYPES from '../types'

const initialState = {
    posts: []
}

const handleBlogPostsFetchSuccess = (state, action) => {
    return {
        ...state,
        posts : action.data
    }
}

const blogPosts = (state = initialState, action) => {
    const handlers = {
        [TYPES.FETCH_BLOG_POSTS_SUCCESS]: handleBlogPostsFetchSuccess
    }
    return handlers[action.type]
        ? handlers[action.type](state, action)
        : state
}

const rootReducer = combineReducers({
    blogPosts
})

export default rootReducer