import React from 'react'
import { books } from './App'

export const Books = ({ title, author, img, id, index }) => {
  let getBook = (id) => {
    let book = books.find((item) => item.id === id)
    console.log(book.title)
  }

  return (
    <div className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button onClick={() => getBook(id)}>Show book</button>
      <p className="number"># {index + 1}</p>
    </div>
  )
}
export default Books
