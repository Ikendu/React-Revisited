import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducers/cart/cartReducer'
import modalReducer from './reducers/model/modal'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
})
export default store
