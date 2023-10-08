import Count from './features/counter/Count'
import AddPost from './features/Post/AddPost'
import Post from './features/Post/Post'

const App = () => {
  return (
    <div className='app'>
      {/* <Count /> */}
      <AddPost />
      <Post />
    </div>
  )
}
export default App
