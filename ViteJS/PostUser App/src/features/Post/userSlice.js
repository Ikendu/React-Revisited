import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: `0`, name: `Gift` },
  { id: `1`, name: `Dav` },
  { id: `2`, name: `Aku` },
]

const usersSlice = createSlice({
  name: `users`,
  initialState,
  reducers: {},
})

export const usersSelector = (store) => store.users

export default usersSlice.reducer
