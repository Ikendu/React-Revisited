import "./App.css"
import React, {useState, useEffect} from "react"
import searchIcon from "./search.svg"
import MovieCard from "./MovieCard"

let APIKey = 'http://www.omdbapi.com/?i=tt3896198&apikey=e213675b'

const App = () => {
  let [movies, setMovies] = useState([])
  let [search, setSearch] = useState(``)
  //let [pageDisplay, setPageDisplay] = useState(`Search for your favourite movie by entering the name on the search space above`)

  const getMovies = async(title) => {
     let resp = await fetch(`${APIKey}&s=${title}`)
     let data = await resp.json()     
     console.log(data)
     setMovies(data.Search)    
  } 

  useEffect(()=>{
    getMovies(`hello`)
  }, [])

  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      getMovies(search)
    }
  }
  const handleClick = () => {
    getMovies(search)
  }
  
  
  return (
    <div className="app">
      <h1>AKUOMA MOVIES</h1> 
      <div className="search">
        <input type="text" value={search} placeholder="search for movies" onChange={handleChange} onKeyDown={handleKeyDown}/>
      
        <img src={searchIcon} onClick={handleClick}/>
      </div>
         
        {
          movies?.length > 0?
          (<div className="container">{movies.map((item => <MovieCard movie={item}/>))}</div>)
          :
          (<div className="empty"><h2>Enter the correct name of the movie followed by the enter key  </h2></div>)
        }
        
    </div>
  )
} 
export default App


