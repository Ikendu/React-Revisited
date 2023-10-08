import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
}

const countSlice = createSlice({
  name: `count`,
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1
    },
    decrement: (state) => {
      state.count = state.count - 1
    },
    reset: (state) => {
      state.count = 0
    },
    definedIncrement: (state, action) => {
      state.count = state.count + action.payload
    },
  },
})

export const { increment, decrement, reset, definedIncrement } =
  countSlice.actions

export default countSlice.reducer
