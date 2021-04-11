const Movie = ({movie}) => {
    return (
        <div className='movie'>
            <h3>{movie.title}</h3>
            <img src={movie.src}/>
        </div>
    )
}

export default Movie
