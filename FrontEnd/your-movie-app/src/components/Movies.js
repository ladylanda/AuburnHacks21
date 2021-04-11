import Movie from './Movie'

const Movies = ({movies, titleClick}) => {
    

    return (
        <div>
            {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} titleClick = {titleClick}/>
            ))}
        </div>
    )
}

export default Movies
