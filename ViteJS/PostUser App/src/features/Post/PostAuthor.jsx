import { useSelector } from 'react-redux'

import { usersSelector } from './userSlice'

const PostAuthor = ({ userId }) => {
  const users = useSelector(usersSelector)
  const author = users.find((user) => user.id === userId)
  //console.log(author)

  return <span>{author ? author.name : `Unknown Author`}</span>
}
export default PostAuthor
