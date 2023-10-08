import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import { postAdd, postSelector } from './postSlice'
import { usersSelector } from './userSlice'

import './index.css'

const AddPost = () => {
  const [title, setTitle] = useState(``)
  const [content, setContent] = useState(``)
  const [userId, setUserId] = useState(``)

  const users = useSelector(usersSelector)

  const dispatch = useDispatch()

  const onChangeTitle = (e) => setTitle(e.target.value)
  const onChangeContent = (e) => setContent(e.target.value)
  const onAuthorChange = (e) => setUserId(e.target.value)

  const onSavePostClick = () => {
    title && content && dispatch(postAdd({ id: nanoid(), title, content, userId }))
    console.log(nanoid())
    setTitle(``)
    setContent(``)
  }

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))

  return (
    <section>
      <h2>New Post</h2>
      <form>
        <label htmlFor='postTitle'>Post Title</label>
        <input
          type='text'
          style={{ width: `500px` }}
          value={title}
          onChange={onChangeTitle}
          id='postTitle'
          name='postTitle'
        />

        <label htmlFor='postAuthur'>Author</label>
        <select id='postAuthur' value={userId} onChange={onAuthorChange}>
          <option value=''>Select Candidate</option>
          {usersOptions}
        </select>

        <label htmlFor='postContent'>Post Content</label>
        <textarea value={content} onChange={onChangeContent} id='postContent' name='postContent' />

        <button type='button' onClick={onSavePostClick} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  )
}
export default AddPost
