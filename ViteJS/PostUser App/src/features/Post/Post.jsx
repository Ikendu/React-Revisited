import { useSelector } from 'react-redux'

import { postSelector } from './postSlice'
import PostAuthor from './PostAuthor'

const Post = () => {
  let posts = useSelector(postSelector)

  let allPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p className='postCredit'>
        <PostAuthor userId={post.userId} />
      </p>
    </article>
  ))
  return (
    <section>
      <h2>Posts</h2>
      {allPosts}
    </section>
  )
}
export default Post
