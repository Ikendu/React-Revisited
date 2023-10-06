import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'

let url = 'https://course-api.com/react-useReducer-cart-project'
let mydata = []

export const getCartItems = createAsyncThunk(`cart/getCartItems`, async () => {
  try {
    let resp = await axios(url)
    return resp.data
  } catch (error) {
    console.log(error)
  }
})

const initialState = {
  cartItems: [],
  amount: 0,
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
    restoreAll: (state, action) => {
      state.cartItems = mydata
    },
    increaseBtn: (state, { payload }) => {
      let itemNum = state.cartItems.find((item) => item.id === payload)
      itemNum.amount = itemNum.amount + 1
    },
    decreaseBtn: (state, action) => {
      let itemNum = state.cartItems.find((item) => item.id === action.payload)
      itemNum.amount = itemNum.amount - 1
    },
    calcTotoal: (state) => {
      let amount = 0
      let total = 0
      state.cartItems.map((item) => {
        amount += item.amount
        total += item.price * item.amount
      })
      state.amount = amount
      state.total = total
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.isLoading = false
        state.cartItems = action.payload
      })
      .addCase(getCartItems.rejected, (state) => {
        state.isLoading = false
      })
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
