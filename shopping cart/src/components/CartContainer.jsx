import { useDispatch, useSelector } from 'react-redux'
import CartItem from './CartItem'
import { restoreAll } from '../reducers/cart/cartReducer'
import { openModal } from '../reducers/model/modal'

const CartContainer = () => {
  const { cartItems, quantity, total } = useSelector((store) => store.cart)
  // const { openModal } = useSelector((store) => store.modal)
  const dispatch = useDispatch()

  if (quantity < 0) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    )
  }

  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
      </header>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total: <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        {cartItems.length > 0 ? (
          <>
            <button
              className="btn clear-btn"
              onClick={() => dispatch(openModal())}
            >
              clear cart
            </button>
          </>
        ) : (
          <>
            <button
              className="btn clear-btn"
              style={{
                color: `blue`,
                background: `white`,
                borderColor: `blue`,
              }}
              onClick={() => dispatch(restoreAll())}
            >
              Reset Items
            </button>
          </>
        )}
      </footer>
    </section>
  )
}
export default CartContainer
