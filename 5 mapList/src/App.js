import './App.css'
import Books from './Books'
import imgE from './images/e.jpg'
import imgF from './images/f.jpg'
// import React, { useState, useEffect } from 'react'
// import searchIcon from './search.svg'

//let APIKey = 'https://www.omdbapi.com/?i=tt3896198&apikey=e213675b'

export const books = [
  //online import
  {
    author: 'Jordan Moore',
    title: 'Interesting Facts For Curious Minds',
    img: 'https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg',
    id: 1,
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
    id: 2,
  },
  //public import
  {
    author: 'Keila Shaheen',
    title: 'The Shadow Work',
    img: './images/a.jpg',
    id: 3,
  },
  {
    author: 'Keila Shaheen',
    title: 'The Shadow Work 2nd Edition',
    img: './images/b.jpg',
    id: 4,
  },
  //src import
  {
    author: 'Keila Shaheen',
    title: 'The Shadow Work 2nd Edition',
    img: imgE,
    id: 5,
  },
  {
    author: 'Keila Shaheen',
    title: 'The Shadow Work 2nd Edition',
    img: imgF,
    id: 6,
  },
]

const App = () => {
  return (
    <>
      <h1>amazon best book sellers</h1>
      <div className="booklist">
        {/* <Form /> */}
        {books.map((book, index) => (
          //<Book author={author} title={title} img={img} key={id} />
          //<Book book={book} key={book.id}/>
          <Books {...book} key={book.id} index={index} />
        ))}
      </div>
    </>
  )
}
//const Book = (props) => {
//{author, title, img} = props OR
//const Book = (props) => { OR
//const Book = (book: { author, title, img }) => { OR

const handleInput = (e) => {
  e.preventDefault()
  console.log(e.target.name)
  console.log(e.target.value)
}
const handleSubmit = (e) => {
  console.log(`form submitted`)
  e.preventDefault()
}
const Form = () => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="test" onChange={handleInput} />
      <button>Click</button>
    </form>
  )
}
export default App
