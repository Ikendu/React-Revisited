import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
  //isItemOpen: false,
}

const modalReducer = createSlice({
  name: `modal`,
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true
    },
    closeModal: (state) => {
      state.isOpen = false
    },
    // openItemModel: (state) => {
    //   state.isItemOpen = true
    // },
    // closeItemModel: (state) => {
    //   state.isItemOpen = false
    // },
  },
})

export const { openModal, closeModal, openItemModel, closeItemModel } =
  modalReducer.actions
export default modalReducer.reducer
