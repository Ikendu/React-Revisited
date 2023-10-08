import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, reset, definedIncrement } from './countSlice'
import { useState } from 'react'

import './index.css'

const Count = () => {
  let { count } = useSelector((store) => store.count)
  let dispatch = useDispatch()
  let [userValue, setUserValue] = useState(0)

  let numValue = Number(userValue) || 0

  let resetAll = () => {
    dispatch(reset())
    setUserValue(0)
  }

  return (
    <section>
      <p>{count}</p>
      <div>
        <button
          onClick={() => {
            dispatch(increment())
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch(decrement())
          }}
        >
          -
        </button>
      </div>
      <input type='text' value={userValue} onChange={(e) => setUserValue(e.target.value)} />
      <div>
        <button onClick={() => dispatch(definedIncrement(numValue))}>value Multiple</button>
        <button onClick={resetAll}>reset All</button>
      </div>
    </section>
  )
}
export default Count
