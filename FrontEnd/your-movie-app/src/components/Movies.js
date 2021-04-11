import Movie from './Movie'

const Movies = ({movies}) => {
    

    return (
        <div>
            {movies.map((movie) => (
            <Movie key={movie.id} movie={movie}/>
            ))}
        </div>
    )
}

export default Movies
