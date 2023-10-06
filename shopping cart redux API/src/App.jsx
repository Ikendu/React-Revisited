import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { calcTotoal, getCartItems } from './reducers/cart/cartReducer'
import Modal from './components/Modal'

const App = () => {
  const dispatch = useDispatch()
  let { cartItems, isLoading } = useSelector((store) => store.cart)
  let { isOpen, isItemOpen } = useSelector((store) => store.modal)

  useEffect(() => {
    dispatch(calcTotoal())
  }, [cartItems])

  useEffect(() => {
    dispatch(getCartItems())
  }, [])

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  )
}
export default App
