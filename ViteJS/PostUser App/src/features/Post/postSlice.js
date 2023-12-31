import { createSlice } from '@reduxjs/toolkit'
import { sub } from 'date-fns'

const initialState = [
  {
    id: '1',
    title: 'Learning Redux Toolkit',
    content: "I've heard good things.",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
  },
  {
    id: '2',
    title: 'Slices...',
    content: 'The more I say slice, the more I want pizza.',
    date: sub(new Date(), { minutes: 5 }).toISOString(),
  },
]
const postSlice = createSlice({
  name: `posts`,
  initialState,
  reducers: {
    postAdd(state, action) {
      state.push(action.payload)
    },
  },
})

export const { postAdd } = postSlice.actions
export const postSelector = (store) => store.posts

export default postSlice.reducer
