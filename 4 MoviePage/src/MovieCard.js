
const MovieCard = ({movie: {Title, Poster, imdbID, Year}}) => {
    return (
        <div key={imdbID} className="movie">
            <h3>{Title}</h3>
            <img src={Poster !== `N/A`? Poster : "https://via.placeholder.com/400"} alt={Title}/>
            <p>{Year}</p>
        </div>
    )
}
export default MovieCard