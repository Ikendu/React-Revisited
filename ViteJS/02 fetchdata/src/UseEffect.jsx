import { useEffect, useState } from 'react'
//fetching data through API
//using async-await inside useEffect
const url = 'https://api.github.com/users'

const UseEffect = () => {
  let [users, setUsers] = useState([])
  useEffect(() => {
    const getUsers = async () => {
      let resp = await fetch(url)
      let data = await resp.json()
      console.log(data)
      setUsers(data)
    }
    getUsers()
  }, [])
  return (
    <div>
      <h1>Github users</h1>
      <ul className="users">
        {users.map((user) => (
          <li key={user.id}>
            <img src={user.avatar_url} />
            <div>
              <h5>{user.login}</h5>
              <a href={user.html_url}>User Profile</a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UseEffect
