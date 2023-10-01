import React, { useState } from 'react'
import { data } from '../data'

const UseState = () => {
  const [state, setState] = useState(0)

  const handlePlus = () => {
    //setState(state + 1)
    //to get realtime value
    setState((value) => {
      let newValue = value + 1
      return newValue
    })
  }
  const handleMinus = () => {
    //setState(state - 1)
    //to call it after some timeout we need to use function
    setTimeout(() => {
      setState((num) => {
        let remain = num - 1
        return remain
      })
    }, 4000)
  }
  return (
    <div className="container">
      <h4>Basic UseState</h4>
      <h3 lassName="container">{state}</h3>
      <button className="btn" onClick={handlePlus}>
        Increase
      </button>
      <button className="btn" onClick={handleMinus}>
        reduce
      </button>
      <UserData />
      <Update />
    </div>
  )
}
const UserData = () => {
  const [names, setName] = useState(data)

  const deleteAll = () => {
    setName([])
  }
  const deleteName = (id) => {
    let newItem = names.filter((name) => name.id !== id)
    setName(newItem)
  }
  const returnAll = () => {
    setName(data)
  }

  return (
    <div>
      {names.map(({ name, id }) => (
        <div key={id}>
          <h3>{name}</h3>
          <button className="btn" onClick={() => deleteName(id)}>
            Delete
          </button>
        </div>
      ))}

      <button className="btn" onClick={deleteAll}>
        Remove all
      </button>
      <button className="btn" onClick={returnAll}>
        Return all
      </button>
    </div>
  )
}
const Update = () => {
  let [person, setPerson] = useState({
    name: 'John',
    age: 22,
    status: 'Teacher',
  })

  const changer = () => {
    //setPerson({ name: 'Chibundu', age: 29, status: 'Developer' }) OR
    //to get realtime value
    setPerson((obj) => {
      let newObj = { ...obj, name: 'Chibundu', age: 29, status: 'Developer' }
      return newObj
    })
  }
  let { name, age, status } = person
  return (
    <div>
      <h3>{name}</h3>
      <h4>{age}</h4>
      <h4>{status}</h4>
      <button className="btn" onClick={changer}>
        Change
      </button>
    </div>
  )
}

export default UseState
