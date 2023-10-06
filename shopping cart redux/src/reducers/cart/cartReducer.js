import { createSlice } from '@reduxjs/toolkit'
import cartItems from '../../cartItems'

const initialState = {
  cartItems: cartItems,
  quantity: 0,
  total: 0,
  isLoading: true,
}

const cartSlice = createSlice({
  name: `cart`,
  initialState,
  reducers: {
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      )
    },
    clearAll: (state) => {
      state.cartItems = []
    },
    restoreAll: (state) => {
      state.cartItems = cartItems
    },
    increaseBtn: (state, { payload }) => {
      let itemNum = state.cartItems.find((item) => item.id === payload)
      itemNum.quantity = itemNum.quantity + 1
    },
    decreaseBtn: (state, action) => {
      let itemNum = state.cartItems.find((item) => item.id === action.payload)
      itemNum.quantity = itemNum.quantity - 1
    },
    calcTotoal: (state) => {
      let quantity = 0
      let total = 0
      state.cartItems.map((item) => {
        quantity += item.quantity
        total += item.price * item.quantity
      })
      state.quantity = quantity
      state.total = total
    },
  },
})
export const {
  removeItem,
  clearAll,
  restoreAll,
  increaseBtn,
  decreaseBtn,
  calcTotoal,
} = cartSlice.actions
export default cartSlice.reducer
