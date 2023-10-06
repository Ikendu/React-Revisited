import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { calcTotoal } from './reducers/cart/cartReducer'
import Modal from './components/Modal'
import RemoveModel from './components/RemoveModel'

const App = () => {
  const dispatch = useDispatch()
  let { cartItems } = useSelector((store) => store.cart)
  let { isOpen, isItemOpen } = useSelector((store) => store.modal)

  useEffect(() => {
    dispatch(calcTotoal())
  }, [cartItems])

  return (
    <main>
      {/* {isItemOpen && (
        <div>
          {cartItems.map((item) => (
            <RemoveModel {...item} />
          ))}
        </div>
      )} */}
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  )
}
export default App
