//still working here
import { removeItem } from '../reducers/cart/cartReducer'
import { closeItemModel } from '../reducers/model/modal'
import { useDispatch } from 'react-redux'

const RemoveModel = ({ id, title }) => {
  let dispatch = useDispatch()
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>remove {title}</h4>
        <div className="btn-container">
          <button
            className="btn confirm-btn"
            onClick={() => {
              dispatch(removeItem(id))
              dispatch(closeItemModel())
            }}
          >
            confirm
          </button>
          <button
            className="btn clear-btn"
            onClick={() => dispatch(closeItemModel())}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  )
}
export default RemoveModel
