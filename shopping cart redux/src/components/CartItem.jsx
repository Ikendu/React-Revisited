import { ChevronDown, ChevronUp } from '../icons'
import {
  removeItem,
  increaseBtn,
  decreaseBtn,
} from '../reducers/cart/cartReducer'
import { useDispatch, useSelector } from 'react-redux'
import RemoveModel from './RemoveModel'
import { openItemModel } from '../reducers/model/modal'

const CartItem = ({ id, img, title, price, quantity }) => {
  const dispatch = useDispatch()
  let { isItemOpen } = useSelector((store) => store.modal)
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>
          remove
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() => dispatch(increaseBtn(id))}
        >
          <ChevronUp />
        </button>
        <p className="amount">{quantity}</p>
        <button
          className="amount-btn"
          onClick={() => {
            quantity == 1
              ? //dispatch(openItemModel())
                dispatch(removeItem(id))
              : dispatch(decreaseBtn(id))
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  )
}
export default CartItem
