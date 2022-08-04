import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../reducer/postsSlicer'
import usersReducer from '../reducer/usersSlice'

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer,
    }
})