import { clearAll } from '../reducers/cart/cartReducer'
import { closeModal } from '../reducers/model/modal'
import { useDispatch } from 'react-redux'

const Modal = () => {
  let dispatch = useDispatch()
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Remove all items and start again?</h4>
        <div className="btn-container">
          <button
            className="btn confirm-btn"
            onClick={() => {
              dispatch(clearAll())
              dispatch(closeModal())
            }}
          >
            confirm
          </button>
          <button
            className="btn clear-btn"
            onClick={() => dispatch(closeModal())}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  )
}
export default Modal
