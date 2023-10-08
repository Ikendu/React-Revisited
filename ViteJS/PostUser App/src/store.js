import { configureStore } from '@reduxjs/toolkit'
import countReducer from './features/counter/countSlice'
import postReducer from './features/Post/postSlice'
import userReducer from './features/Post/userSlice'

const store = configureStore({
  reducer: {
    count: countReducer,
    posts: postReducer,
    users: userReducer,
  },
})
export default store
